import style from './Message.module.css';

export const Message = ({message, newMessage, handleNewMessage}) => {
  const handleInput = (ev) => {
    handleNewMessage(newMessageFunc => newMessageFunc = ev.target.value)
  }

  return (
    <div className="Message">
      <p>Message-Func: {message}</p>
      <p className={style.Message}>New Message-Func: {newMessage}</p>
      <input type="text" onChange={handleInput}/>
    </div>
  );
}