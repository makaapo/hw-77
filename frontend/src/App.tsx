import Home from './features/Home/Home.tsx';
import {Container, Typography} from '@mui/material';
import {Route, Routes} from 'react-router-dom';
import NewMessage from './features/NewMessage/NewMessage.tsx';
import AppToolbar from './components/UI/AppToolbar/AppToolBar.tsx';
const App = () => (
  <>
    <header>
      <AppToolbar/>
    </header>
    <Container maxWidth="xl" component="main" sx={{marginTop: '2rem'}}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/messages/new" element={<NewMessage/>}/>
        <Route path="*" element={<Typography variant="h1">Not found</Typography>}/>
      </Routes>
    </Container>
  </>
);

export default App
