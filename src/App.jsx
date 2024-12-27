
import react, { useState } from 'react';
import './globalCSS.css';
let App = () => {
   const [board,setBoard] = useState(Array(9).fill(null))
   const[isXTurn,setXTurn] = useState(true);
   const[winner,setWinner] = useState(null);
    const renderSquare = (index) => {
        return (
        
            <button className='square' onClick={() => handleClick(index)}>{board[index]}</button>
      

        )
        
    }
    let handleClick = (index) => {
        if(board[index] != null){
            return;
        }
     
        let newBoard = [...board];
        newBoard[index] = isXTurn ? 'X' :'O';
        setBoard(newBoard);
        setXTurn(!isXTurn);
        const  winnerCombination =checkWinner(newBoard);
        if(winnerCombination){
            setWinner(newBoard[winnerCombination[0]]);
        }
    }
    let checkWinner = (newBoard) => {
        const combination =[[0,1,2],[3,4,5],
        [6,7,8],[0,3,6],
        [1,4,7],[2,5,8],
    [0,4,8],[2,4,6]];
    for(let i=0;i<combination.length;i++)
    {
        const[a,b,c] = combination[i];
        if(board[a] == board[b] && board[b] == board[c]){
            return combination[i];
        }
    }
    return null;
    }
    const handleReset = () => {
        setBoard(Array(9).fill(null));
        setWinner(null);
    }
    return(
        <>
        <div className='board'>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
        <button  onClick={handleReset } className='Reset'>Reset</button>
        {winner && <center><h2>{winner} is Winner of this Game 🥳🥳🥳</h2></center>}
    </>
    )
}


export default App;
