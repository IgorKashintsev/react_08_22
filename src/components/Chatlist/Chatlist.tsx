import { List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FC, useState } from 'react';
import { Chat } from 'src/types';
import TextField from '@mui/material/TextField';
import MuiButton from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 as uuidv4 } from 'uuid';

import style from "./Chatlist.module.scss";

interface ChatlistProps {
  chats: Chat[];
  onAddChat: (newChat: Chat) => void;
  onDeleteChat: (chatId: string) => void;
}

export const Chatlist: FC<ChatlistProps> = ({chats, onAddChat, onDeleteChat}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if(value) {
      onAddChat({
        id: uuidv4(),
        name: value,
      });
      setValue('');
    }
  }

  return (
  <>
    <List >
      {chats.map((chat) => (
        <ListItem className={style.chat_list} key={chat.id} data-testid="li">
          <NavLink className={style.chat_list}
            to={`/chats/${chat.id}`} 
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
              onClick={() => onDeleteChat(chat.id)}
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