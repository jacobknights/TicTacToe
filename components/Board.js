import React from 'react';
import Square from '../components/Square';

const Board = ({ squares, onClick }) => (
    //Map through and designate the array element value for each square
    <div className="board">
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
)

export default Board;