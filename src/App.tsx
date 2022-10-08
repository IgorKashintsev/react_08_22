import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { Chatlist } from './components/Chatlist/Chatlist';
import { ChatPage } from './pages/ChatPage';
import { Header } from './components/Header';
import { Provider } from 'react-redux';
import { store } from './store';

export const App: FC = () => {

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Main/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="chats">
            <Route index element={<Chatlist/>}/>
            <Route path=":chatId" element={<ChatPage/>}/>
          </Route>
        </Route>
        <Route path="*" element={<div>404 Page</div>}/>
      </Routes>
    </Provider>
  );
};