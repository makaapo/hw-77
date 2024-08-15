import MessageForm from '../../components/MessageForm/MessageForm.tsx';
import {Box, Typography} from '@mui/material';

const Home = () => {
  return (
    <>
      <Box sx={{
        width: 300,
        minWidth: '200px',
        padding: 2,
        borderRight: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        position: 'relative',
        backgroundColor: '#f9f9f9',
        borderRadius: 2,
        boxShadow: 1
      }}>
        <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
          New message
        </Typography>
        <MessageForm />
      </Box>
    </>
  );
};

export default Home;
