import style from './Message.module.css';

export const Message = ({messageList}) => {

  const result = messageList.map((obj, id) => {
    return <p className={style.Message} key={id} data-testid="par">
        {obj.author}: {obj.text}
      </p>;
  });

  return (<>
    {result}
  </>
  );
}