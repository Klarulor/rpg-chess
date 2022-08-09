import {useContext} from "react";
import {BoardContext} from "../Context/BoardContext";

export const useBoard = () => useContext(BoardContext);