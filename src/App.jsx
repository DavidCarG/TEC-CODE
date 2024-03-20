import { Header } from "./components/Header";
import { Card } from '@mantine/core';

import Porfile from "./components/Porfile";
import { PreviewClass } from "./components/PreviewClass";
import { NextEvents } from "./components/NextEvents";
import { Gallery } from "./components/Gallery";
import { Code } from "./components/Code";


function App() {
  return (
    <>
      <Header/>
      <Card className="container">
        <Porfile/>
        <PreviewClass/>
      </Card>
      <Card className="container">
        <NextEvents/>
        <Gallery/>
        <Code/>
      </Card>

      
    </>
  );
}

export default App;