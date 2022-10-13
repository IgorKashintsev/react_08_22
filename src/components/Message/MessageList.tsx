import { List, ListItem } from '@mui/material';
import { FC } from 'react';
import { Message } from '../../types';

interface MessageProps {
  messageList: Message[];
}

export const MessageList: FC<any> = ({messageList}) => {

  return (
    <List>
      {messageList.map((newMessage: any, idx: number) => (
        <ListItem key={idx} data-testid="li">
          {newMessage.author}: {newMessage.text}
        </ListItem>
      ))}
    </List>
  );
};