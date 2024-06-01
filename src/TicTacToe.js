import React, { useState } from 'react';
import './MainPage.css';

const X_TURN = 1;
const O_TURN = 2;
const X_IMG = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/LetterX.svg/1200px-LetterX.svg.png";
const O_IMG = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/LetterO.svg/1200px-LetterO.svg.png";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(O_TURN);
  const [winner, setWinner] = useState(null);

  const changeImage = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn === X_TURN ? X_IMG : O_IMG;
    setBoard(newBoard);
    setTurn(turn === X_TURN ? O_TURN : X_TURN);

    if (checkWin(newBoard)) {
      setWinner(turn === X_TURN ? 'X' : 'O');
    }
  };

  const checkWin = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  };

  const clearTicTacToe = () => {
    setBoard(Array(9).fill(null));
    setTurn(O_TURN);
    setWinner(null);
  };

  return (
    <div id="TicTacToe">
      <p>Here's the tic tac toe table! Feel free to play with a friend :)</p>
      <p>{winner ? `${winner} wins!` : `Turn: ${turn === X_TURN ? 'X' : 'O'}`}</p>
      <table>
        <tbody>
          {[0, 1, 2].map((row) => (
            <tr key={row}>
              {[0, 1, 2].map((col) => {
                const index = row * 3 + col;
                return (
                  <td key={index} onClick={() => changeImage(index)} id={index + 1}>
                    {board[index] && <img src={board[index]} className="TTT" alt="" />}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {winner && <button onClick={clearTicTacToe}>Restart</button>}
    </div>
  );
}

export default TicTacToe;
