import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { Game } from './components/game';


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
    <Game></Game>
  </div>
);

export default App;

