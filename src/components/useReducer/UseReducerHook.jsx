import React , {useReducer}from 'react'

const initialState = 0; 

function reducer(state, action) {
    switch(action.type){
        case "increment": return state + 1;
        case "decrement": return state - 1;
        default:throw new Error();
    }
}

const UseReucerHook = () => {

const [state, dispatch] = useReducer(reducer, initialState);

    return (  
        <div>
            <h1>useReducer Hook</h1>

            <h2>{state}</h2>
            <button onClick={()=> dispatch({type:"increment"})}>Increment</button>
            <button onClick={()=> dispatch({type:"decrement"})}>Decrement</button>
            
        </div>
    );
}
 
export default UseReucerHook
