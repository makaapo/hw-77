import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import {Message, MessageMutation} from '../types.ts';

export const createMessage = createAsyncThunk<void, MessageMutation>('messages/create', async (messageMutation) => {
  const formData = new FormData();
  formData.append('author', messageMutation.author);
  formData.append('message', messageMutation.message);

  if (messageMutation.image) {
    formData.append('image', messageMutation.image);
  }

  await axiosApi.post('/messages', formData);
});

export const fetchMessages = createAsyncThunk<Message[]>('messages/fetchAll', async () => {
  const { data: messages } = await axiosApi.get<Message[]>('/messages');
  return messages;
});

