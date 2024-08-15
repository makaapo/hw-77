import { createSlice } from '@reduxjs/toolkit';
import {Message} from '../types.ts';
import {createMessage, fetchMessages} from './messageThinks.ts';

export interface MessagesState {
  messages: Message[];
  messagesFetching: boolean;
  isCreating: boolean;
}

const initialState: MessagesState = {
  messages: [],
  messagesFetching: false,
  isCreating: false,
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.messagesFetching = true;
      })
      .addCase(fetchMessages.fulfilled, (state, { payload: messages }) => {
        state.messagesFetching = false;
        state.messages = messages;
      })
      .addCase(fetchMessages.rejected, (state) => {
        state.messagesFetching = false;
      });

    builder
      .addCase(createMessage.pending, (state) => {
        state.isCreating = true;
      })
      .addCase(createMessage.fulfilled, (state) => {
        state.isCreating = false;
      })
      .addCase(createMessage.rejected, (state) => {
        state.isCreating = false;
      });
  },
  selectors: {
    selectMessage: (state) => state.messages,
    selectMessagesFetching: (state) => state.messagesFetching,
    selectMessageCreating: (state) => state.isCreating,
  },
});

export const messagesReducer = messagesSlice.reducer;

export const {
  selectMessage,
  selectMessagesFetching,
  selectMessageCreating,
} = messagesSlice.selectors;