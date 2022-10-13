import { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Chatlist } from '../../components/Chatlist/Chatlist';
import { Form } from '../../components/Form/Form';
import { MessageList } from '../../components/Message/MessageList';
import { useSelector } from 'react-redux';
import { selectMessages } from '../../store/messages/selectors';

export const ChatPage: FC<any> = ({chats, messages}) => {
  const {chatId} = useParams();
  // const messages = useSelector(selectMessages);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />
  }
  const prepareMessages = [
    ...Object.values((chatId && messages[chatId].messages) || {}),
  ];
  
  return (
    <>
      <Chatlist chats={chats}/>
      <Form />
      <MessageList messageList={prepareMessages}/>
    </>
  );
};