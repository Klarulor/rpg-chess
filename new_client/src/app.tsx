import React from 'react';
import './App.css';
import {Board} from "./Components/Board/Board";
import {BoardProvider} from "./Context/BoardContext";
import {KlaruSocketContext, KlaruSocketProvider} from "./Context/KlaruSocketContext";
import {BrowserRouter} from 'react-router-dom';
import {Route, Routes} from "react-router";
import {Home} from "./Components/Home/Home";
import {Wait} from "./Components/Wait";
import {Sidebar} from "./Components/Sidebar/Sidebar";
import {Container} from "./Components/Container/Container";
import {Vector2} from "./Features/Vector2";
import {Game} from "./Components/Game/Game";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {
    return (
        <BrowserRouter>
            {/*<KlaruSocketProvider>*/}
                <DndProvider backend={HTML5Backend}>
                    <BoardProvider>
                        <div className="App">
                            <Sidebar />
                            <Container>
                                <Routes>
                                    <Route path="/game" element={<Game/>}/>
                                    <Route path="/" element={<Home/>}/>
                                    <Route path="/wait" element={<Wait/>}/>
                                </Routes>
                            </Container>
                        </div>
                    </BoardProvider>
                </DndProvider>
            {/*</KlaruSocketProvider>*/}
        </BrowserRouter>
    );
}

export default App;
