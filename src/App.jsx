import { Navbar } from "./components/Navbar";
import './App.css';
import './index.css'

function App() {


  return (
    <>
       
      <Navbar/>
      <Container padding="md" size="lg" style={{ display: 'flex' }}>
        <div style={{ flex: 1, padding: '1rem' }}>
          <Paper padding="md" shadow="xs">
            <Text align="center" size="xl">Bienvenido a mi aplicacion</Text>
            <Button>Hello Mantine</Button>
          </Paper>
        </div>
      </Container>
    </>
  );
}

export default App;
