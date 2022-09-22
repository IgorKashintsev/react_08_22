import {ChangeEvent, FC, useState} from 'react';
import TextField from '@mui/material/TextField';
import {Button} from '../Button/Button';
import { Messages } from 'src/types';

interface FormProps {
  addMessage: any;
  messageList: Messages;
}

export const Form: FC<FormProps> = ({messageList, addMessage}) => {
  const getInitObj = () => {
    return {
      author: '',
      text: '',
    };
  };

  const [obj, setObj] = useState(getInitObj());
  const change = (prop: string, event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setObj({...obj, [prop]: event.target.value});
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    addMessage([...messageList, obj]);
    setObj(getInitObj());
  };

  return (<>
    <form onSubmit={handleSubmit}>
        <TextField
          sx={{width: 400}}
          style={{marginBottom: '25px'}}
          value={obj.author}
          onChange={event => change('author', event)}
          label="Enter your name"
          variant="outlined"
          autoFocus
        />
        <br />
        <TextField
          sx={{width: 400}}
          style={{marginBottom: '25px'}}
          label="Enter your message"
          multiline
          rows={4}
          value={obj.text}
          onChange={event => change('text', event)}
        />
        <br />
        <Button label='Send' disabled={!(obj.text && obj.author)} />
    </form>
  </>
  );
};