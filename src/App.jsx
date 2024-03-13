import { Navbar } from "./components/Navbar";
import { Button, MantineProvider, Container, Paper, Text } from '@mantine/core';
import './App.css';
import './index.css'

function App() {


  return (
    <>
       <MantineProvider>
      <Navbar/>
      <Container padding="md" size="lg" style={{ display: 'flex' }}>
        <div style={{ flex: 1, padding: '1rem' }}>
          <Paper padding="md" shadow="xs">
            <Text align="center" size="xl">Bienvenido a mi aplicación</Text>
            <Button>Hello Mantine</Button>
          </Paper>
        </div>
      </Container>
    </MantineProvider>
    </>
  );
}

export default App;
