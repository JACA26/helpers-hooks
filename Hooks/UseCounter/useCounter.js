import { useState } from 'react'

export const useCounter = (initialState = 1) => {
    
    const [counter, setCounter] = useState(initialState)
    
    const increment = (factor = 1) => {
        setCounter(counter + factor);
    }
    
    const decrement = (factor = 1) =>{
        setCounter(counter - factor);
    }
    
    const reset = (factor = initialState) => {
        setCounter(factor);
    }
    
    return{
        counter,
        increment,
        decrement,
        reset
    }
}

export default useCounter



