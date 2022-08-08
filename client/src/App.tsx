import React from 'react';
import './App.css';
import {Board} from "./Components/Board";
import {BoardProvider} from "./Context/BoardContext";
import {KlaruSocketContext, KlaruSocketProvider} from "./Context/KlaruSocketContext";
import {BrowserRouter} from 'react-router-dom';
import {Route, Routes} from "react-router";
import {Home} from "./Components/Home";
import {Wait} from "./Components/Wait";

function App() {
    return (
        <BrowserRouter>
            <KlaruSocketProvider>
                <BoardProvider>
                    <div className="App">
                        <Routes>
                            <Route path="/game/:id" element={<Board/>}/>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/wait/:id" element={<Wait/>}/>
                        </Routes>
                    </div>
                </BoardProvider>
            </KlaruSocketProvider>
        </BrowserRouter>
    );
}

export default App;
