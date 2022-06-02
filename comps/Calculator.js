import { useState, useEffect } from "react";
import {useReducer } from "react"



/**
 * export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    EVALUATE: 'Evaluate',
    CLEAR: 'clear',
    CHOOSE_OPERATION: 'choose-operation',
    DELETE: 'delete'
}

function reducer(state, { type, payload }) {
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            return {
                ...state,
                currentOperand: '${currentOperand ||}${payload.digit}'
            }
        case ACTIONS.EVALUATE:
            ca
    }
}
 * 
 * 
 *  const [{currNum, prevNum, operation}, dispatch] = useReducer(reducer, {})
 * 
 * 
 * 
 * if (curState.includes(".") && e.target.innerText == ".") return

        if (total) {
            setPrestate("");
        }
        curState
            ? setCurState((pre) => +e.target.innerText)
            : setCurState(e.target.innerText);
        setTotal(false);
 * 


    const inputNum = e => {
        setTotal(e.target.innerText)
    };


    if (e.target.innerText == "." && input.contains(".")){
            pass
        }
 */



const Calculator = () => {
 
    const [preState, setPrestate] = useState("");

    const [curState, setCurState] = useState("");

    const [input, setInput] = useState("0");

    const [operator, setOperator] = useState(null);


    const inputNum = (e) => {
        
        if (input == 0){
            setInput(e.target.innerText)
        } else {
            setInput(input + e.target.innerText)
        }
        
    }

    
    const operatorType = e => {
        setOperator(e.target.innerText)
        setPrestate(input)
        setInput(0)
     }


    const reset = e => {
        setInput(0)
        setCurState(0)
        setPrestate(0)
     }


    const negate = e => {
        setInput(0 - input)
     }

    const percent = e => {
        setInput(input/100)
     }

    const equals = e => {
        
        setCurState(input)
        
        const pre = parseFloat(preState)
        const cur = parseFloat(input)

        console.log(operator, preState, curState, pre, cur, input)
        var result = NaN
        switch (operator){
            case "+":
                result = pre + cur
                
                break
            case "-":
                result = pre - cur
                break
            case "x":
                result = pre * cur
                break
            case "÷":
                result = pre / cur
                break

       
            
        }
        setInput(result)
     } 

    return ( 
        <div className = 'container'>
            <div className = 'wrapper'>

                <div className = "textbox">
                    {input}
                </div>

                <div className = "btn function" onClick={reset}>AC</div>
                <div className = "btn function" onClick={negate}>+/-</div>
                <div className = "btn function" onClick={percent}>%</div>
                <div className = "btn operator" onClick={operatorType}>÷</div>

                <div className = "btn digit" onClick={inputNum}>7</div>
                <div className = "btn digit" onClick={inputNum}>8</div>
                <div className = "btn digit" onClick={inputNum}>9</div>
                <div className = "btn operator" onClick={operatorType}>x</div>

                <div className = "btn digit" onClick={inputNum}>4</div>
                <div className = "btn digit" onClick={inputNum}>5</div>
                <div className = "btn digit" onClick={inputNum}>6</div>
                <div className = "btn operator" onClick={operatorType}>-</div>

                <div className = "btn digit" onClick={inputNum}>1</div>
                <div className = "btn digit" onClick={inputNum}>2</div>
                <div className = "btn digit" onClick={inputNum}>3</div>
                <div className = "btn operator" onClick={operatorType}>+</div>

                <div className = "btn digit zero" onClick={inputNum}>0</div>
                <div className = "btn digit" onClick={inputNum}>.</div>
                <div className = "btn operator" onClick={equals}>=</div>

            </div>
        </div>
     );
}
 
export default Calculator;