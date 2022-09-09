import {useState} from 'react';
import {Message as MessageClass} from './class-components/Message';
import {Message} from './components/Message';

import './index.css'

export const App = () => {
  const [newMessageClass, setMessage] = useState('Super NEW Message');
  const [newMessageFunc, setMessageFunc] = useState('Super NEW Message');

  const handleChangeMessage = (ev) => {
    setMessage(ev.target.value)
  };

  return (
    <div className="Form">
      <h2 style={{backgroundColor: 'green'}}>Class components</h2>
      <MessageClass message = 'My message for you'
        newMessage={newMessageClass}
        changeMessage={handleChangeMessage}
      />
      <hr />
      <h2 style={{backgroundColor: 'blue'}}>Function components</h2>
      <Message message='My message for you too' newMessage={newMessageFunc} handleNewMessage={setMessageFunc}/>
      <hr />
    </div>
  );
}