import { FC } from "react";

interface DeleteChatProps {
  onDeleteChat: (chatId: string) => void;
  chatId: string;
}

export const DeleteChat: FC<DeleteChatProps> = ({onDeleteChat, chatId}) => {

  const handleClick = (ev: { preventDefault: () => void; }) => {
    ev.preventDefault()
    onDeleteChat(chatId)
  }

  return (
    <>
      <button type="button" onClick={handleClick}>Delete chat</button>
    </>
  );
};