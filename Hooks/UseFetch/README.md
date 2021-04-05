# useFetch

## useFetch( url: String ): Constructor
    
    - url: Endpoint to fetch data.
    - useFetch return a state:
        {
            loading: true,
            error: null,
            data: null
        }
        
        * loading: for manipulate loaders.
        * error: for catch errors.
        * data: data fetches

## Basic usage:
    
    const url = 'https://endpoint/API/users/';
    const state = useFetch(url);
    
    
    //Destructuring state:
    const {loading, error, data} = state

