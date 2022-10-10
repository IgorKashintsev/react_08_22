import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Profile } from "../pages/Profile";
import { Main } from "../pages/Main";
import { Header } from "./Header";
import { Chatlist } from "./Chatlist";
import { ChatPage } from "../pages/ChatPage";


export const AppRouter: FC = () => (
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
);