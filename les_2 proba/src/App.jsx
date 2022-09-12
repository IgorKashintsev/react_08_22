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


  const sayHi = () => {
    if (messageList.length <= 0) {
      return;
    }
    let last = messageList[messageList.length - 1]
    console.log('Hello', last.author, ', how can I help you?');
  };

  useEffect(() => {
    setTimeout(sayHi, 1500)
  }, [messageList]);

  return (
    <div className="Form">
      <Message 
        messageList={messageList}
        obj={obj}
        unique_id={unique_id}
        setObjMes={setObj}
        setValueMes={setValue}
        getInitObjMes={getInitObj}
        />
    </div>
  );
}