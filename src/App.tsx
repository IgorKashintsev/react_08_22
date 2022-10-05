import { useState, FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { Chatlist } from './components/Chatlist/Chatlist';
import { Chat, Message, Messages } from './types';
import { ChatPage } from './pages/ChatPage';
import { Header } from './components/Header';
import { Provider } from 'react-redux';
import { store } from './store';

const defaultChats: Chat[] = [
  {
    id: '1',
    name: 'first',
  },
  {
    id: '2',
    name: 'second',
  }
];

const defaultMessages: Messages = {
  '1': [{author: 'User', text: 'Hello World'}],
  '2': [{author: 'Bot', text: 'Hello, I am BOT'}],
};

export const App: FC = () => {
  const [chats, setChats] = useState<Chat[]>(defaultChats);
  const [messageList, setMessages] = useState<Messages>(defaultMessages);

  const [theme, setTheme] = useState<'light' | 'dark'>('light'); //example
  const toggleTheme = () => { //example
    setTheme(theme === 'light'? 'dark': 'light'); //example
  } 

  const onAddChat = (newChat: Chat) => {
    setChats([...chats, newChat]);
    setMessages({...messageList, [newChat.id]: [],});
  };

  const onDeleteChat = (chatId: string) => {
    setChats(chats.filter((item) => item.id != chatId));
    delete messageList[chatId];
  }

  const onAddMessage = (chatId: string, newMessage: Message) => {
    setMessages({
      ...messageList,
      [chatId]: [...messageList[chatId], newMessage],
    });
  };

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Main/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="chats">
            <Route 
              index element={<Chatlist chats={chats} 
                onDeleteChat={onDeleteChat}
                onAddChat={onAddChat}/>
              }
            />
            <Route 
              path=":chatId" 
              element={<ChatPage chats={chats} 
                onAddChat={onAddChat} 
                messageList={messageList} 
                onAddMessage={onAddMessage}
                onDeleteChat={onDeleteChat}
              />
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<div>404 Page</div>}/>
      </Routes>
    </Provider>
  )
};