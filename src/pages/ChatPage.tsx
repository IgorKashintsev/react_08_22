import { useEffect, FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Chatlist } from '../components/Chatlist/Chatlist';
import { Form } from '../components/Form/Form';
import { MessageList } from '../components/Message/MessageList';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessages } from '../store/messages/selectors';
import { addMessage } from '../store/messages/actions';

export const ChatPage: FC = () => {
  const {chatId} = useParams();
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  useEffect(() => {
    if (chatId === undefined) {
      return
    } else if (messages[chatId] === undefined) {
      return
    }
    const last = messages[chatId][messages[chatId].length - 1];
    if (chatId && messages[chatId].length > 0 && last.author !== 'BOT') {
      const timeout = setTimeout(() => {
        dispatch(addMessage(chatId, {
        author: 'BOT',
        text: `Hello ${last.author}, how can I help you?`,
      }));
     }, 1500);

     return () => clearTimeout(timeout);
    }
    
  }, [chatId, messages, dispatch]);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />
  }

  return (
    <>
      <Chatlist />
      <Form />
      <MessageList messageList={chatId ? messages[chatId] : []}/>
    </>
  );
};