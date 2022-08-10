import React, { useState } from 'react';
import { calculateWinner } from '../src/logic';
import Board from '../components/Board';


const Game = () => {
    //Board is an array with 9 empty elements
    const [board, setBoard] = useState(Array(9).fill(null));
    //Start with X player first
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {
        //Create copy of board state to not change state directly
        const boardCopy = [...board];
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? 'X':'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }
    
    //CREATE UNDO METHOD
    //const undoMove = () => {}
    //Create undo button that uses boardcopy[i-1] if clicked?
        
    
    //Create restart game
    const restartGame = () => (
        //When clicked button refills as squares of board with null
        <button className="sg-btn" onClick={() => setBoard(Array(9).fill(null))}>
            Restart Game
        </button>
    )

    return (
        <>
            <h1 className="title-h1">Tic Tac Toe </h1>
            <Board squares={board} onClick={handleClick} />
            <div className="game-div">
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {restartGame()}
            </div>
        </>
    )
}

export default Game;