import {List, ListItem} from '@mui/material';
import { FC, useState } from 'react';
import { Chat } from 'src/types';
import { v4 as uuidv4 } from 'uuid';

interface ChatlistProps {
  chats: Chat[];
  onAddChat: (newChat: Chat) => void;
}

export const Chatlist: FC<ChatlistProps> = ({chats, onAddChat}) => {
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
        <ListItem key={chat.id}>
          {chat.name}
        </ListItem>
      ))}
    </List>
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={(e) => setValue(e.target.value)}/>
      <button>Create chat</button>
    </form>
  </>
  );
};