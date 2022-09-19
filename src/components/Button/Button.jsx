import style from '../Message/Message.module.css';

export const Button = ({label, disabled = false, click = () => null}) => {
  return (<>
    <button
      className={style.button}
      disabled={disabled}
      onClick={click}
      data-testid="button"
    >{label}</button>
  </>
  );
}