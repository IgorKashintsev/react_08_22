// import {useState, useEffect, FC} from 'react';
// import {MessageList} from './components/Message/MessageList';
// import {Form} from './components/Form/Form';
// import {Chatlist} from './components/Chatlist/Chatlist';
// import { Messages, Message } from './types';

// interface MessageProps {
//   messageList: Messages;
// }


// export const App: FC<MessageProps> = () => {
//   const [messageList, addMessage] = useState<Messages>([]);

//   const addMessageBot = (newMessage: Message) => {
//     addMessage((prevMessageList) => [...prevMessageList, newMessage])
//   };

//   useEffect(() => {
//     const last = messageList[messageList.length - 1];
//     if (messageList.length > 0 && last.author !== 'BOT') {
//       const timeout = setTimeout(() => {addMessageBot({
//         author: 'BOT',
//         text: `Hello ${last.author}, how can I help you?`,
//       })
//      }, 1500);

//      return () => clearTimeout(timeout);
//     }
//   }, [messageList]);

//   return (
//     <div className="Form">
//       <Form
//         messageList={messageList}
//         addMessage={addMessage}
//       />
//       <Chatlist />
//       <MessageList
//         messageList={messageList}
//       />
//     </div>
//   );
// };