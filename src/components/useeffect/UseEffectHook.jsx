import React, {useState, useEffect } from 'react';



const UseEffectHook = () => {
    const [time , setTime] = useState(new Date().toString());
    const [message, setMessage] = useState(" functional component");




useEffect(() =>{
    console.log("component mounting and update");
    const interal = setInterval(showDate, 1000);
    return () =>{
        console.log("clean up interval");
        clearInterval(interal)
    }

}, [time])

const showDate = () =>{
    setTime(new Date().toString());

}

    return ( 
        <div>
            <div>{time}</div>

            <button onClick={showDate} Show Date>Show time</button>
            <div>{message}</div>

            <button onClick={()=>setMessage("Changed Functional component")}>Message</button>
        
        </div>
     );
}
 
export default UseEffectHook;