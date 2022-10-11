import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message, MessagesWithId } from "../../types";
import { v4 as uuidv4 } from 'uuid';

export interface AddMessage {
  chatName: string,
  message: Message,
}

const initialState: MessagesWithId = {
  first: [{id: '1', author: 'User', text: 'Hello World'}],
  second: [{id: '2', author: 'Bot', text: 'Hello, I am BOT'}],
}

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<string>) => {
      state[action.payload] = [];
    },
    addMessage: (state, action: PayloadAction<AddMessage>) => {
      const {author, text} = action.payload.message;
      state[action.payload.chatName].push({
        id: uuidv4(),
        author,
        text,
      });
    },
    deleteChat: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

let timeout: NodeJS.Timeout;
export const addMessageWithReply = createAsyncThunk(
  'messages/addMessageWithReply', (payload: AddMessage, { dispatch }) => {
    const {chatName, message} = payload;
      dispatch(addMessage({chatName, message}));
    
      if (message.author !== 'BOT') {
        if(timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          dispatch(
            addMessage({
              chatName,
              message: {
                author: 'BOT',
                text: `Hello ${message.author}, how can I help you?`,
              }
            })
          );
        }, 1500);
      }
});

export const { addChat, addMessage, deleteChat } = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;