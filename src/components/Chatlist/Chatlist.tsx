import { List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FC, useState } from 'react';
import TextField from '@mui/material/TextField';
import MuiButton from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import style from "./Chatlist.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from '../../store/messages/actions';
import { selectChats } from '../../store/messages/selectors';

export const Chatlist: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const chats = useSelector(
    selectChats,
    (prev, next) => prev.length === next.length
  );

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if(value) {
      dispatch(addChat(value));
      setValue('');
    }
  };

  return (
  <>
    <List >
      {chats.map((chat) => (
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
              onClick={() => dispatch(deleteChat(chat.name))}
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