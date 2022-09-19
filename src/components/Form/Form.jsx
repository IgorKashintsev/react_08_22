import style from '../Message/Message.module.css';
import { Button } from '../Button/Button';

export const Form = ({obj, messageList, setObjMes, setValueMes, getInitObjMes}) => {
  const change = (prop, event) => {
    setObjMes({...obj, [prop]: event.target.value});
  };

  const addMessage = (ev) => {
    ev.preventDefault();
    setValueMes([...messageList, obj]);
    setObjMes(getInitObjMes());
  };

  return (<>
    <form onSubmit={addMessage}>
        <input className={style.input}
          placeholder='Enter your name'
          value={obj.author}
          onChange={event => change('author', event)}/>
        <br />
        <textarea className={style.input__message}
          placeholder='Введите сообщение' cols="30" rows="10"
          value={obj.text}
          onChange={event => change('text', event)}></textarea>
        <br />
        <Button label='Send' disabled={!(obj.text && obj.author)} />
    </form>
  </>
  );
}