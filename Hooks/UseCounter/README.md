# useCounter

## Variables and methods:

#### useCounter(initialState: number): Constructor.
    
    - initialState: counter initial value
    - initialState: default value = 1
    - this constructor return a object: 
    {counter, increment, decrement, reset}

#### counter: Current counter status.
    
    Example:
    const {counter} = useCounter();
    console.log(counter); //1

#### increment( factor: number ): Increment the counter depending on the factor.
    
    - factor: value by which the counter will increment
    - factor: default value = 1

#### decrement( factor: number ): Decrement the counter depending on the factor.
    
    - factor: value by which the counter will decrement
    - factor: default value = 1
    

#### reset( factor: number): Reset the counter.
    
    - factor: value by which the counter will reset.
    - factor: default value = initialState



## Basic Usage:
    
    
    const {counter, increment, decrement, reset} = useCounter();
    
    console.log(counter) //1
    
    increment(3)
        console.log(counter) //counter+3 = 4
    
    decrement()
        console.log(counter) //counter-1 = 3
    
    reset()
        console.log(counter) //initialState = 1
