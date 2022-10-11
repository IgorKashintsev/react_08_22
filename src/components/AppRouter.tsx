import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Profile } from "../pages/Profile/Profile";
import { Main } from "../pages/Main";
import { Header } from "./Header";
import { Chatlist } from "./Chatlist";
import { ChatPage } from "../pages/ChatPage/ChatPage";
import { Articles } from "../pages/Articles";
import { SignIn } from "../pages/SingIn";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter: FC = () => (
  <Routes>
    <Route path="/" element={<Header/>}>
      <Route index element={<Main/>}/>
      <Route path="profile" element={<PrivateRoute component={<Profile/>}/>}/>
      <Route path="signin" element={<PublicRoute component={<SignIn/>}/>}/>
      <Route path="chats" element={<PrivateRoute/>}>
        <Route index element={<Chatlist/>}/>
        <Route path=":chatId" element={<ChatPage/>}/>
      </Route>
      <Route path="articles" element={<Articles/>}></Route>
    </Route>
    <Route path="*" element={<div>404 Page</div>}/>
  </Routes>
);