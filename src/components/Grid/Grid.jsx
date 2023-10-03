import { useState } from "react";
import './Grid.css';
import Card from '../Card/Card';
import isWinner from "../../helpers/checkWinner";

function Grid({numberOfCards}){
const [board, setBoard] = useState(Array(numberOfCards).fill(""));
const [turn, setTurn] = useState(true);
const[winner, setWinner] = useState(null)

function play(index){
    if(turn == true)
    {
        board[index] = 'O';

    }else {
        board[index] = 'X'
    }
    setBoard([...board]);
    setTurn(!turn);

    const win = isWinner(board, turn ? 'O' : 'X');
    if (win){

        setWinner(win);
    }

   
}
function reset(){
    setBoard(Array(numberOfCards).fill(""));
    setTurn(true);
    setWinner(null);
    }
return (
    <div className="grid-wrapper">
        {
            winner && (
                <>
                <h1 className="turn-highlight"> Winner is {winner} </h1>
                <button className="reset-btn" onClick = {reset}>Reset</button>
                </>
            )
        }
        <h1 className="turn-highlight"> Current turn : {(turn) ? 'O' : 'X'}</h1>
    <div className ="grid">
        {board.map((el, idx) =><Card key = {idx} onPlay = {play} gameEnd = {winner ? true : false} player={el} index = {idx} />)}
    </div>
    </div>
)
}

export default Grid;