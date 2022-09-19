import {useState, useEffect} from 'react';
import {Message} from './components/Message/Message';
import {Form} from './components/Form/Form';


export const App = () => {
  const getInitObj = () => {
    return {
      author: '',
      text: '',
    };
  };

  const [messageList, setValue] = useState([]);
  const [obj, setObj] = useState(getInitObj());

  const addMessageBot = (obj) => {
    setValue((prevMessageList) => [...prevMessageList, obj])
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
        obj={obj}
        setObjMes={setObj}
        setValueMes={setValue}
        getInitObjMes={getInitObj}
      />
      <Message 
        messageList={messageList}
      />
    </div>
  );
}