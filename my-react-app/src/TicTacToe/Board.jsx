import React, { useState } from "react";
import Square from "./Square";

const Board = () => {

    const initialState = Array(9).fill(null);
    const [state, setState] = useState(initialState);
    const [isXturn, setXturn] = useState(true);

    const handleClick = (index) => {
        if (state[index] !== null || checkWinner()) {
            return;
        }
        const copyState = [...state];
        copyState[index] = isXturn ? "X" : "O";
        setState(copyState);
        setXturn(!isXturn);
    }
    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],

        ]

        for (const logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;
    }

    const isWinner = checkWinner();

    const handleReset = () => {
        setState(initialState);
    }

    const checkTie = () => {
        return state.every(square => square !== null);
    }

    const isTie = !isWinner && checkTie();



    return (
        <div className="board-wrapper">
            {!isWinner && !isTie && <h4>Player {isXturn ? "X" : "O"} turn</h4>}
            <div className="board-container">
                {isWinner ? (
                    <>
                        {isWinner} won the game
                        <br />
                        <button onClick={handleReset}>Play Again</button>
                    </>
                ) : isTie ? (
                    <>
                        It's a Tie!
                        <br />
                        <button onClick={handleReset}>Play Again</button>
                    </>
                ) : (
                    <>
                        <div className="board-row">
                            <Square onClick={() => handleClick(0)} value={state[0]} />
                            <Square onClick={() => handleClick(1)} value={state[1]} />
                            <Square onClick={() => handleClick(2)} value={state[2]} />
                        </div>
                        <div className="board-row">
                            <Square onClick={() => handleClick(3)} value={state[3]} />
                            <Square onClick={() => handleClick(4)} value={state[4]} />
                            <Square onClick={() => handleClick(5)} value={state[5]} />
                        </div>
                        <div className="board-row">
                            <Square onClick={() => handleClick(6)} value={state[6]} />
                            <Square onClick={() => handleClick(7)} value={state[7]} />
                            <Square onClick={() => handleClick(8)} value={state[8]} />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Board