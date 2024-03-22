import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Header } from "./components/Header";
import { Card } from '@mantine/core';

import Porfile from "./components/Porfile";
import { PreviewClass } from "./components/PreviewClass";
import { NextEvents } from "./components/NextEvents";
import { Gallery } from "./components/Gallery";
import { Code } from "./components/Code";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/Note">Note</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
            <li><Link to="/Porfile">Porfile</Link></li>
            <li><Link to="/code">Code</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/Gallery">
            <Gallery />
          </Route>
          <Route path="/porfile">
            <Porfile />
          </Route>
          <Route path="/code">
            <Code />
          </Route>
          <Route path="/Note">
            <Note />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;