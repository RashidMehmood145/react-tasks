import React,{useState} from 'react'
import UseStateHook from '../usestate/UseStateHook';
import UseEffectHook from './UseEffectHook';
// import ClassComponent from './ClassComponent'


const Index = () =>{
    const [flag, setFlag] = useState(true);

    const toggleClassComponent = () =>{
        setFlag(!flag)

    }



    return(
        <div>
            <button onClick={toggleClassComponent}>Toggle Functional Component</button>
           {flag ?   <UseEffectHook/>: ""}

        </div>
    )
}

export default Index