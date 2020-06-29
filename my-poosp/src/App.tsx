import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { Game } from './components/game';
import { Button } from 'antd';

//function App() {
  //return (
    //<div className="App">
      //<Game></Game>
    //</div>
  //);
//}

//export default App;

const App: FC = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    <Game></Game>
  </div>
);

export default App;