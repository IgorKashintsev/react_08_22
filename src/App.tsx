import {useState, useEffect, FC} from 'react';
// import {MessageList} from './components/Message/MessageList';
// import {Form} from './components/Form/Form';
// import {Chatlist} from './components/Chatlist/Chatlist';
// import { Messages, Message } from './types';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { Chatlist } from './components/Chatlist';
import { Chat, Messages } from './types';

const defaultChats: Chat[] = [
  {
    id: '1',
    name: 'first',
  },
  {
    id: '2',
    name: 'second',
  }
]

export const App: FC = () => {
  const [chats, setChats] = useState<Chat[]>(defaultChats);
  const [messageList, addMessage] = useState<Messages>({});

  const onAddChat = (newChat: Chat) => {
    setChats([...chats, newChat])
  }

  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="chats">
        <Route index element={<Chatlist chats={chats} onAddChat={onAddChat}/>}/>
      </Route>
    </Routes>
  )
};