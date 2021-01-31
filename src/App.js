import React from "react";
import { Client } from "boardgame.io/react";
import { TicTacToe } from "./Game";
import { TicTacToeBoard } from "./Board";
import { SocketIO } from "boardgame.io/multiplayer";

const TicTacToeClient = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  multiplayer: SocketIO({ server: "localhost:8000" }),
});

const App = () => (
  <div>
    <h2>Player 0</h2>
    <TicTacToeClient matchID="match-id" playerID="0" />
    <h2>Player 1</h2>
    <TicTacToeClient matchID="match-id" playerID="1" />
  </div>
);
export default App;
