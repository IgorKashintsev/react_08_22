import {useState, useEffect, FC} from 'react';
import {Message} from './components/Message/Message';
import {Form} from './components/Form/Form';
import {Chatlist} from './components/Chatlist/Chatlist';
import { Messages, NewMessage } from './types';

interface MessageProps {
  messageList: Messages;
}


export const App: FC<MessageProps> = () => {
  const [messageList, addMessage] = useState<Messages>([]);

  const addMessageBot = (obj: NewMessage) => {
    addMessage((prevMessageList) => [...prevMessageList, obj])
  };

  useEffect(() => {
    const last = messageList[messageList.length - 1];
    if (messageList.length > 0 && last.author !== 'BOT') {
      const timeout = setTimeout(() => {addMessageBot({
        author: 'BOT',
        text: `Hello ${last.author}, how can I help you?`,
      })
     }, 1500);

     return () => clearTimeout(timeout);
    }
  }, [messageList]);

  return (
    <div className="Form">
      <Form
        messageList={messageList}
        addMessage={addMessage}
      />
      <Chatlist />
      <Message 
        messageList={messageList}
      />
    </div>
  );
};