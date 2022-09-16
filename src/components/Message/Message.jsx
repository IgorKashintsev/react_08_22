import style from './Message.module.css';

export const Message = ({obj, messageList, setObjMes, setValueMes, getInitObjMes}) => {

  const change = (prop, event) => {
    setObjMes({...obj, [prop]: event.target.value});
  };

  const addMessage = (ev) => {
    ev.preventDefault();
    setValueMes([...messageList, obj]);
    setObjMes(getInitObjMes());
    console.log(messageList);
  };

  const result = messageList.map((obj, id) => {
    return <p className={style.Message} key={id}>
        {obj.author}: {obj.text}
      </p>;
  });

  return (<>
    <form onSubmit={addMessage}>
        <input className={style.input}
          placeholder='Введите ваше имя'
          value={obj.author}
          onChange={event => change('author', event)}/>
        <br />
        <textarea className={style.input__message}
          placeholder='Введите сообщение' cols="30" rows="10"
          value={obj.text}
          onChange={event => change('text', event)}></textarea>
        <br />
        <button disabled={!(obj.text && obj.author)}
          className={style.button}
          type='submit'>Отправить</button>
    </form>
    {result}
  </>
  );
}