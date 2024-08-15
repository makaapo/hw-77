import {Button, Grid, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

const Home = () => {

  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h4">Messages</Typography>
          </Grid>
          <Grid item>
            <Button color="primary" component={Link} to="/messages/new">
              Add message
            </Button>
          </Grid>
        </Grid>

      </Grid>
    </>
  );
};

export default Home;
