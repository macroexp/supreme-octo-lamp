import React from 'react';
import ReactDOM from 'react-dom';
import './game';
import './board';

export function Square(props: any) {
    return(
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
//When we modified the Square to be a function component, we also changed onClick={() => this.props.onClick()} to a shorter onClick={props.onClick} (note the lack of parentheses on both sides).
  

