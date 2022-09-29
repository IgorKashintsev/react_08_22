import { List, ListItem } from '@mui/material';
import { FC } from 'react';
import { Message } from 'src/types';

interface MessageProps {
  messageList: Message[];
}

export const MessageList: FC<MessageProps> = ({messageList}) => {

  return (
    <List>
      {messageList.map((newMessage, id) => (
        <ListItem key={id} data-testid="li">
          {newMessage.author}: {newMessage.text}
        </ListItem>
      ))}
    </List>
  );
};