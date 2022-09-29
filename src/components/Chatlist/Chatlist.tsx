import { List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FC, useState } from 'react';
import { Chat } from 'src/types';
import { v4 as uuidv4 } from 'uuid';
import { DeleteChat } from './DeleteChat';

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
        <ListItem key={chat.id}>
          <NavLink 
            to={`/chats/${chat.id}`} 
            style={({isActive}) => ({
              color: isActive ? 'green' : 'blue',
            })}
          >
            {chat.name} 
            {<DeleteChat onDeleteChat={onDeleteChat} chatId={chat.id}/>}
          </NavLink>
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