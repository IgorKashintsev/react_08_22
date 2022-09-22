import {List, ListItem} from '@mui/material';

export const Chatlist = () => {

  const chatsItem = [
    { id: "1", name: "Чат 1" },
    { id: "2", name: "Чат 2" },
    { id: "3", name: "Чат 3" },
  ];

  return (
    <List >
      {chatsItem.map((obj, id) => (
        <ListItem key={id}>
          {obj.id}: {obj.name}
        </ListItem>
      ))}
    </List>
  );
};