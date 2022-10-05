import { ChangeEvent, FC, memo, useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '../Button/Button';
import { Message } from 'src/types';
import { useParams } from 'react-router-dom';

interface FormProps {
  addMessage: (chatId: string, msg: Message) => void;
}

export const Form: FC<FormProps> = memo(({addMessage}) => {
  const clearInput = () => {
    return {
      author: '',
      text: '',
    };
  };

  const [newMessage, setMessage] = useState(clearInput());
  const {chatId} = useParams();

  const change = (prop: string, 
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMessage({...newMessage, [prop]: event.target.value});
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if(chatId) {
      addMessage(chatId, {
        author: newMessage.author,
        text: newMessage.text,
      });
    }
    setMessage(clearInput());
  };

  return (<>
    <form onSubmit={handleSubmit} role="form">
        <TextField
          sx={{width: 400}}
          style={{marginBottom: '25px', marginTop: '25px'}}
          value={newMessage.author}
          onChange={event => change('author', event)}
          label="Enter your name"
          variant="outlined"
          autoFocus
          inputProps={{'data-testid': 'input'}}
        />
        <br />
        <TextField
          sx={{width: 400}}
          style={{marginBottom: '25px'}}
          label="Enter your message"
          multiline
          rows={4}
          value={newMessage.text}
          onChange={event => change('text', event)}
          inputProps={{'data-testid': 'textarea'}}
        />
        <br />
        <Button 
          disabled={!(newMessage.text && newMessage.author)}
          >Send
        </Button>
    </form>
  </>
  );
});