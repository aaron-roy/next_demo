import { useState } from "react";


const hooks = () => {

    const [count, setCount] = useState(4);

    const decrement = e => {
        setCount(e.target - 1)
    }

    const increment = e => {
        setCount(e + 1)
    }
     
    

    return (
        <div>
           <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div> 
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
        </div>
        
      );
}
export default hooks;