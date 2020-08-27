import React, {useState} from 'react';
import './App.css';

//create your forceUpdate hook
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}

const App = () => {
    const [copied, setCopied] = useState()
    const forceUpdate = useForceUpdate();
    const [board, setBoard] = useState({
        0: '-',
        1: '-',
        2: '-',
        3: '-',
        4: '-',
        5: '-',
        6: '-',
        7: '-',
        8: '-',
    });
    const handleClick = (e) => {
        e.preventDefault();
        let newBoard = board;
        const value = newBoard[String(e.target.id)]
        if(value==='-')
            newBoard[String(e.target.id)] = 'X'
        else if(value==='X')
            newBoard[String(e.target.id)] = 'O'
        else
            newBoard[String(e.target.id)] = '-'
        setBoard(newBoard)
        forceUpdate()
    }
    const makeString = () => {
        let i = 0
        let str = ''
        while(i<9) {
            str = str.concat(board[String(i++)])
        }
        return str
    }
    const copyClip = (item) => {
        let textField = document.createElement('textarea');
        textField.innerText = item
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
    return (
        <div className={"container"}>
            <h1><a href={"https://github.com/xuxey"}>xuxey's</a> tictactoe helper</h1>
            <h4>Click once = 'X', twice = 'O', thrice = '-'</h4>
            <div className={"board"}>
                <div className={"board-row"}>
                    <button className={"square"} id={0} onClick={handleClick}>{board["0"]}</button>
                    <button className={"square"} id={1} onClick={handleClick}>{board["1"]}</button>
                    <button className={"square"} id={2} onClick={handleClick}>{board["2"]}</button>
                </div>
                <div className={"board-row"}>
                    <button className={"square"} id={3} onClick={handleClick}>{board["3"]}</button>
                    <button className={"square"} id={4} onClick={handleClick}>{board["4"]}</button>
                    <button className={"square"} id={5} onClick={handleClick}>{board["5"]}</button>
                </div>
                <div className={"board-row"}>
                    <button className={"square"} id={6} onClick={handleClick}>{board["6"]}</button>
                    <button className={"square"} id={7} onClick={handleClick}>{board["7"]}</button>
                    <button className={"square"} id={8} onClick={handleClick}>{board["8"]}</button>
                </div>
            </div>
            <div>
                <h3>{makeString()}</h3>
                <a className="cursor-pointer ml-1" onClick={()=> copyClip(makeString())} >Copy</a>
            </div>
        </div>
    );
}

export default App;
