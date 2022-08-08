import React from 'react';
import './App.css';
import {Board} from "./Components/Board";
import {BoardProvider} from "./Context/BoardContext";
import {KlaruSocketContext, KlaruSocketProvider} from "./Context/KlaruSocketContext";
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from "react-router";

function App() {
  return (
    <BrowserRouter>
        <KlaruSocketProvider>
            <BoardProvider>
                <div className="App">
                    <Switch>
                        <Route path="/game">
                            <Board />
                        </Route>
                        <Route path="}
                    </Switch>
                </div>
            </BoardProvider>
        </KlaruSocketProvider>
    </BrowserRouter>
  );
}

export default App;
