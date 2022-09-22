import {List, ListItem} from '@mui/material';
import { FC } from 'react';
import { Messages } from 'src/types';

interface MessageProps {
  messageList: Messages;
}

export const Message: FC<MessageProps> = ({messageList}) => {

  return (
    <List>
      {messageList.map((obj, id) => (
        <ListItem key={id}>
          {obj.author}: {obj.text}
        </ListItem>
      ))}
    </List>
  );
};