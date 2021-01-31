import React from "react";
import { Client } from "boardgame.io/react";
import { TicTacToe } from "./Game";
import { TicTacToeBoard } from "./Board";
import { SocketIO } from "boardgame.io/multiplayer";
import ClientConsole from "./ClientConsole";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";

const TicTacToeClient = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  multiplayer: SocketIO({ server: "localhost:8000" }),
});

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/player1">player1</Link>
              </li>
              <li>
                <Link to="/player2">player2</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/player1">
              <TicTacToeClient matchID="match-id" playerID="0" />
              <ClientConsole playerID={0}></ClientConsole>
            </Route>
            <Route path="/player2">
              <TicTacToeClient matchID="match-id" playerID="1" />
              <ClientConsole playerID={1}></ClientConsole>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
