import Home from './features/Home/Home.tsx';
import {Container} from '@mui/material';
const App = () => (
    <Container maxWidth="xl" component="main" sx={{marginTop: '2rem'}}>
      <Home/>
    </Container>
);

export default App
