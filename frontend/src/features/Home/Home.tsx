import {Button, CircularProgress, Grid, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks.ts';
import {selectMessage, selectMessagesFetching} from '../messageSlice.ts';
import {fetchMessages} from '../messageThinks.ts';
import {useEffect} from 'react';
import MessageCard from '../../components/MessageCard/MessageCard.tsx';

const Home = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessage);
  const isFetching = useAppSelector(selectMessagesFetching);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h4">Messages</Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" component={Link} to="/messages/new">
              Add message
            </Button>
          </Grid>
        </Grid>
        {isFetching ? (
            <CircularProgress />
          ) :
        <Grid item container spacing={1} marginBottom={5} justifyContent="center">
          {messages.map((msg, index) => (
            <MessageCard
              key={index}
              author={msg.author}
              message={msg.message}
              image={msg.image ?? null}
            />
          ))}
        </Grid>}
      </Grid>
    </>
  );
};

export default Home;
