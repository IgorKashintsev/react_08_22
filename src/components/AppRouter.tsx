import { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Profile } from "../pages/Profile/Profile";
import { Main } from "../pages/Main";
import { Header } from "./Header";
import { Chatlist } from "./Chatlist";
import { ChatPage } from "../pages/ChatPage/ChatPage";
import { Articles } from "../pages/Articles";
import { SignIn } from "../pages/SignIn";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { SignUp } from "../pages/SignUp";
import { db, firebaseAuth, getChats } from "../services/firebase";
import { useDispatch } from "react-redux";
import { auth } from "../store/profile/slice";
import { onValue, ref } from "firebase/database";

export const AppRouter: FC = () => {
  const dispatch = useDispatch();
  const [chats, setChats] = useState<any[]>([]);
  const [messages, setmessages] = useState<any>({});

  useEffect(() => {
    const authUnsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      dispatch(auth(!!user));
    });
    const chatsUnsubscribe = onValue(getChats(), (snapshot) => {
      const data = snapshot.val() || {};
      setChats([...Object.values(data)]);
    });
    const messagesUnsubscribe = onValue(ref(db, 'messages'), (snapshot)=> {
      const data = snapshot.val() || {};
      setmessages(data);
    });

    return () => {
      authUnsubscribe();
      chatsUnsubscribe();
      messagesUnsubscribe();
    };
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<Main/>}/>
        <Route path="profile" element={<PrivateRoute component={<Profile/>}/>}/>
        <Route path="signin" element={<PublicRoute component={<SignIn/>}/>}/>
        <Route path="signup" element={<PublicRoute component={<SignUp/>}/>}/>
        <Route path="chats" element={<PrivateRoute/>}>
          <Route index element={<Chatlist chats={chats} messages={messages}/>}/>
          <Route path=":chatId" element={<ChatPage chats={chats} messages={messages}/>}/>
        </Route>
        <Route path="articles" element={<Articles/>}></Route>
      </Route>
      <Route path="*" element={<div>404 Page</div>}/>
    </Routes>
  );
};