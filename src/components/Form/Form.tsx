import { ChangeEvent, FC, memo, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '../Button/Button';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMessageWithReply } from '../../store/messages/slice';
import { ThunkDispatch } from 'redux-thunk';
import { StoreState } from '../../store';
import { push, ref } from 'firebase/database';
import { db } from '../../services/firebase';

export const Form: FC = memo(() => {
  const clearInput = () => {
    return {
      author: '',
      text: '',
    };
  };

  const [newMessage, setMessage] = useState(clearInput());
  const {chatId} = useParams();
  const dispatch = useDispatch<ThunkDispatch<StoreState, void, any>>();

  const change = (prop: string, 
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMessage({...newMessage, [prop]: event.target.value});
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if(chatId) {
      // dispatch(
      //   addMessageWithReply({
      //     chatName: chatId,
      //     message: {
      //       author: newMessage.author,
      //       text: newMessage.text,
      //     },
      //   })
      // );

      push(ref(db, `messages/${chatId}/messages`), {
        author: newMessage.author,
        text: newMessage.text,
      })
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