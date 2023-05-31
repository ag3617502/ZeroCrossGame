import React from 'react';
import logo from './logo.svg';
import './App.css';
import TicTacToe from './TicTacToe/TicTacToe';

function App() {
  const [isGame, setIsGame] = React.useState(false);
  return (
    <div className="App">
      {!isGame ? (
        <div>
          <h1> Click on button to play TicTacToe</h1>
          <button onClick={() => setIsGame(!isGame)}>
            {" "}
            Play TicTacToe{" "}
          </button>{" "}
        </div>
      ) : (
        <div>
          {" "}
          <h2>Click on squares </h2>
          <div className='square_box'>
            <TicTacToe />
          </div>
          <button onClick={() => setIsGame(!isGame)}>Exit Game</button>
        </div>
      )}
    </div>
  );
}

export default App;
