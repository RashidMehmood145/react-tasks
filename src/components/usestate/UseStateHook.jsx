import React, { useState } from 'react'

import '../../App.css';

function UseStateHook() {


const [name , setName] = useState("Rashid");
const [flag, setFlag] = useState(false)
const [count, setCount] = useState(0);
const [names, setNames] = useState([])


const NameChanger = () =>{
  setFlag(!flag)
//  setName("Rashid")
}

const increament = () =>{
  setCount(count+1)
}
const decreament = () =>{
  setCount(count-1)
}

// const handleInput {
//   setList((e)=>(
//     e.target.value
//   ))
//   console.log(handleInput)
// }
const inputHandler=(e)=>{
e.preventDefault();
// update the state
setNames([...names, {id:names.length, name:name}])
setName("");

}

  return (
    <div className="App ">
      <h1>Hello {flag ? name:""}</h1>
      <button onClick={NameChanger}>Click me</button> 
      <hr /> 
      <button onClick={increament}>+</button>
      <div>{count}</div>
      <button onClick={decreament}>-</button>

      <hr />

  
        <form onSubmit={inputHandler}>
        <input type="text" placeholder="Enter Name" value={name} onChange={((e)=>setName(e.target.value))}/>
        <button >submit</button>
        </form>
        <hr />
        <ul>
          {names.map((item)=>(
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      
    </div>
  );
}


export default UseStateHook;
