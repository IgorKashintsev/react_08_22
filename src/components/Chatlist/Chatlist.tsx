import { List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FC, useState } from 'react';
import TextField from '@mui/material/TextField';
import MuiButton from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import style from "./Chatlist.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from '../../store/messages/slice';
import { selectChats } from '../../store/messages/selectors';
import { db, getChats } from '../../services/firebase';
import { set, ref, remove } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { Chat } from '../../types';

// interface ChatlistProps {
//   chats: Chat[];
// }

export const Chatlist: FC<any> = ({chats}) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  // const chats = useSelector(
  //   selectChats,
  //   (prev, next) => prev.length === next.length
  // );

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if(value) {
      // dispatch(addChat(value));
      set(ref(db, `chats/${value}`), {
        id: uuidv4(),
        name: value,
      });
      setValue('');
      set(ref(db, `messages/${value}`), {
        name: value,
      });
    }
  };

  const handleDelete = (chatName: string) => {
    remove(ref(db, `chats/${chatName}`));
    // if(value) {
    //   dispatch(deleteChat())
    // }
  };

  return (
  <>
    <List >
      {chats.map((chat: any) => (
        <ListItem className={style.chat_list} key={chat.id} data-testid="li">
          <NavLink className={style.chat_list}
            to={`/chats/${chat.name}`} 
            style={({isActive}) => ({
              color: isActive ? 'green' : 'blue',
            })}
          >
            {chat.name}
            {<MuiButton
              variant="outlined"
              size="small"
              style={{marginLeft: '20px'}}
              startIcon={<DeleteIcon />}
              data-testid='buttonChatDel'
              onClick={() => handleDelete(chat.name)}
            >Delete chat
            </MuiButton>}
          </NavLink>
        </ListItem>
      ))}
    </List>
    <form onSubmit={handleSubmit} role="form">
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        sx={{width: 200}}
        label="Enter name of chat"
        variant="outlined"
        inputProps={{'data-testid': 'inputChat'}}
      />
      <MuiButton
        sx={{width: 200, height: 56}}
        disabled={!value}
        variant="contained"
        type='submit'
      >Create chat
      </MuiButton>
    </form>
  </>
  );
};