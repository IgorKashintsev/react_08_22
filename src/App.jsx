import {useState, useEffect} from 'react';
import {Message} from './components/Message/Message';
import { v4 as uuid } from 'uuid';


export const App = () => {
  const getInitObj = () => {
    return {
      id: unique_id,
      author: '',
      text: '',
    };
  };

  const [messageList, setValue] = useState([]);
  const [obj, setObj] = useState(getInitObj());
  const unique_id = uuid();

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
      <Message 
        messageList={messageList}
        obj={obj}
        unique_id={unique_id}
        setObjMes={setObj}
        setValueMes={setValue}
        getInitObjMes={getInitObj}/>
    </div>
  );
}