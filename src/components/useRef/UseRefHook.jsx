import React, {useState, useRef, useEffect} from 'react'



// 1.Dom reference (access the dom element and you can manipulate your dom )
// 2.useRef for storing the previous State
// 3.hold the mutable value prevent re-render the component

//   so whenever the value of useRef changes component doen't re-render, it's render when state will be change


const UseRefHook = () => {
    const [name, setName] = useState([ ]);
    const [counter, setCounter] = useState(0);
    const inputEl = useRef("");
    const holdThePreviousState = useRef(" ");
    console.log(inputEl)


const changeInput = () =>{
    setName("")
    inputEl.current.focus();
}

useEffect(()=>{
    holdThePreviousState.current = counter
}, [counter])

    return ( 
        <div>
            <input 
            ref ={inputEl}
            type="text"
            placeholder="type text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <button onClick={changeInput}> change input</button>
            <div>My name is {name}</div>

            <div>
                <h1>{counter}</h1>
                {typeof holdThePreviousState.current !== "undefined" &&(
                    <h2>previous counter : {holdThePreviousState.current}</h2>
                )}
                <button onClick={()=>setCounter(Math.ceil(Math.random()* 100))}>Generate Random Number</button>
            </div>
           
        </div>
     );
}
 
export default UseRefHook;