# useForm

## useForm( initialState: object ): Constructor
    
    - initialState: Object with input names from form
    - useForm return a array:
        [values, handleInputChange, reset]
        
        * values: for manipulate input values.
        * handleInputChange: for onChange method on input.
        * reset: reset & clean form

## Clarification:
    
    useForm use the input name values for manipulate the inputs.




## Basic usage:
    
    const MyComponentForm() = () => {
        
        const initialState = {
            'user': '', //input with name user
            'email': ''  //input with name email
        }
        
        const [values, handleInputChange, reset] = useForm(initialState);
        
        //Destructuring values for manipulate inputs:
        const {user, email} = values;
        
        
    return(
        <form>
            
            <input 
                type="text" name="user" 
                value={user} onChange={handleInputChange}
            />
            
            <input 
                type="email" name="email" 
                value={email} onChange={handleInputChange}
            />
        </form>
    )}