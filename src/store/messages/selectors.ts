import { StoreState } from "..";
import { v4 as uuidv4 } from 'uuid';


export const selectMessages = (state: StoreState) => state.messages;
export const selectChats = (state: StoreState) => Object.keys(state.messages).map((chatName) => ({
  id: uuidv4(),
  name: chatName,
}));