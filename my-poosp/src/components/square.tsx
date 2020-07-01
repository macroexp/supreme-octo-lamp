import React from 'react';
import ReactDOM from 'react-dom';
import './game';
import './board';
import { Button } from 'antd';
import { SearchOutlined, AppstoreOutlined } from '@ant-design/icons';

export function Square(props: any) {
    let buttonContent = <span>  </span>;
    if(props.value == 'X')
        buttonContent = <SearchOutlined />;
    else if(props.value == 'O')
        buttonContent = <AppstoreOutlined />;
    return(
        <Button type="default" size="large" className="square" onClick={props.onClick}>
            {buttonContent}
        </Button>
    );
}
//When we modified the Square to be a function component, we also changed onClick={() => this.props.onClick()} to a shorter onClick={props.onClick} (note the lack of parentheses on both sides).
  

