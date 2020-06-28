import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './square';
import './game';
import { Square } from './square';

type boardprops = {squares: Array<string>, onClick: (i:number) => void}

export class Board extends React.Component<boardprops, {}> {
    renderSquare(i: number) {
      return (
        <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  