import { useEffect, useRef, useState } from "react"

const useFetch = (url) => {
    
    const isMount = useRef(true);
    
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    })
    
    useEffect(() => {
        return () => {
            isMount.current = false;
        }
    }, [])
    
    useEffect(() => {
        
        setState({loading:true, error:null, data: null});
        
        fetch(url)
            .then( resp => resp.json() )
            .then(data => {
                
                if (isMount.current){
                    
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                    
                }else{
                    console.log("setState hasn't been called");
                }
                
            })
            
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se obtuvo la data'
                })
            })
        
    }, [url])
    
    return state;
}

export default useFetch
