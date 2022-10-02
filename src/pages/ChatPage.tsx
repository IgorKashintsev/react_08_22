import { useEffect, FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Chatlist } from '../components/Chatlist/Chatlist';
import { Form } from '../components/Form/Form';
import { MessageList } from '../components/Message/MessageList';
import { Chat, Message, Messages } from 'src/types';

interface ChatPageProps {
  chats: Chat[];
  onAddChat: (newChat: Chat) => void;
  messageList: Messages;
  onAddMessage: (chatId: string, msg: Message) => void;
  onDeleteChat: (chatId: string) => void;
}

export const ChatPage: FC<ChatPageProps> = ({
    chats, 
    onAddChat, 
    onAddMessage, 
    messageList,
    onDeleteChat,
  }) => {
  const {chatId} = useParams();

  useEffect(() => {
    if (chatId === undefined) {
      return
    } else if (messageList[chatId] === undefined) {
      return
    }
    const last = messageList[chatId][messageList[chatId].length - 1];
    if (chatId && messageList[chatId].length > 0 && last.author !== 'BOT') {
      const timeout = setTimeout(() => {onAddMessage(chatId, {
        author: 'BOT',
        text: `Hello ${last.author}, how can I help you?`,
      });
     }, 1500);

     return () => clearTimeout(timeout);
    }
    
  }, [chatId, messageList, onAddMessage]);

  if (chatId && !messageList[chatId]) {
    return <Navigate to="/chats" replace />
  }

  return (
    <>
      <Chatlist chats={chats} onAddChat={onAddChat} onDeleteChat={onDeleteChat}/>
      <Form addMessage={onAddMessage} />
      <MessageList messageList={chatId ? messageList[chatId] : []}/>
    </>
  );
};