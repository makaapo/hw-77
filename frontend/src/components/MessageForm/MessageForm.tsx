import React, { useState } from 'react';
import {Button, Grid, TextField} from '@mui/material';
import {MessageMutation} from '../../types.ts';
import FileInput from '../UI/FileInput/FileInput.tsx';


interface Props {
  onSubmit: (message: MessageMutation) => void;
}

const MessageForm: React.FC<Props> = ({ onSubmit}) => {
  const [state, setState] = useState<MessageMutation>({
    author: '',
    message: '',
    image: null,
  });

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ ...state });
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fileInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    const value = files && files[0] ? files[0] : null;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Grid container direction="column" spacing={2} component="form" onSubmit={submitFormHandler}>
      <Grid item>
        <TextField
          sx={{
            width: '100%',
          }}
          label="Author"
          id="author"
          name="author"
          value={state.author}
          onChange={inputChangeHandler} />
      </Grid>
      <Grid item>
        <TextField
          sx={{
            width: '100%',
          }}
          required
          multiline
          minRows={3}
          label="Message"
          id="message"
          name="message"
          value={state.message}
          onChange={inputChangeHandler}
        />
      </Grid>
      <Grid item>
        <FileInput label="Image" name="image" onChange={fileInputChangeHandler} />
      </Grid>
      <Grid item>
        <Button
          disabled={state.message.trim().length === 0}
          variant="contained"
          type="submit"
        >Send</Button>
      </Grid>
    </Grid>
  );
};

export default MessageForm;