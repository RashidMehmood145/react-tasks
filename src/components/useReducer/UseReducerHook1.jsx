import React , {useReducer, useState}from 'react'

const initialState = [{id:Date.now(), name:"rashid", email:"rashidpadda145@gmail.com"}]; 

function reducer(state, action) {

    switch (action.type) {
        case "add":
            return [...state, action.payload]
        case "delete":
            return state.filter(contact =>{
             return contact.id !== action.payload.id;
            });          
        default:
            throw new Error ();
    }
}



const UseReducerHook1 = () =>{
const [name, setName]  = useState("");
const [email, setEmail] = useState("");


 const [state, dispatch]=useReducer(reducer, initialState)

const SubmitValues = (e) =>{
  e.preventDefault(); 
  const contact = {
      id:Date.now(),
      name:name,
      email:email
  }

  setName("")
  setEmail("")

  dispatch({ type: "add", payload: contact});
};

    return(
        <div>
            <h1>UseReducer for Little Bit Complex problem</h1>

            <div>
                <form onSubmit={SubmitValues}>
                    
                    <input type="text" placeholder="Enter the Name" value={name}  onChange={(e)=>setName(e.target.value)}/>
                    <input type="email" placeholder="Enter the email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>

            <div>
                <ul>
                {state.map((contact)=>{
                    return(
                        <li key={contact.id}>
                            <h2>{contact.name}</h2>
                            <h2>{contact.email}</h2>
                            <button onClick={()=>dispatch({type:"delete", payload:{id: contact.id}})}>Delete</button>
                        </li>                   
                    )
                })}
                </ul>
            </div>

        </div>
    )
}

 
export default UseReducerHook1;
