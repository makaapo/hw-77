import {Box, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {MessageMutation} from '../../types.ts';
import {createMessage} from '../messageThinks.ts';
import MessageForm from '../../components/MessageForm/MessageForm.tsx';
import {useAppDispatch} from '../../app/hooks.ts';

const NewMessage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onFormSubmit = async (messageMutation: MessageMutation) => {
    await dispatch(createMessage(messageMutation));
    navigate('/');
  };

  return (
    <>
      <Box sx={{
        width: '100%',
        padding: 2,
        borderRight: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        backgroundColor: '#f9f9f9',
        borderRadius: 2,
        boxShadow: 1,
      }}>
        <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
          New message
        </Typography>
        <MessageForm onSubmit={onFormSubmit} />
      </Box>
    </>
  );
};

export default NewMessage;