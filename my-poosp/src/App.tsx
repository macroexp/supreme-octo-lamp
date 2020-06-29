import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { Game } from './components/game';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

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
    <Button type="primary" block size="large">Big Button</Button>
    <br></br>
    <Button type="default" danger>Default Button</Button>
    <Button type="dashed" disabled>
      DisabledDashed
    </Button>
    <Tooltip title="search">
      <Button type="primary" shape="round" icon={<SearchOutlined />}></Button>
    </Tooltip>
    <Game></Game>
  </div>
);

export default App;

