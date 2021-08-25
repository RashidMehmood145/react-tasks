import React,{useState} from 'react'
import {useForm} from 'react-hook-form';

const SignUp = () => {

    const {register, handleSubmit, errors} = useForm();
    const [userInfo, setUserInfo] = useState()

  const onSubmit = (data) =>{
      setUserInfo(data)
      console.log(data);
  }


    return ( 
        <div>
            <div className="container">

                <pre>{JSON.stringify(userInfo,undefined, 2)}</pre>
                <div className="text-center mt-5 mb-5">
                    <h1> Registration Form</h1>
                </div>

                <div className="border border-dark p-5 ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label className="form-label"> UserName</label>
                            <input 
                            type="text"
                             placeholder="UserName" 
                             name="username" 
                             className="form-control"
                             ref={register()}
                              />

                        </div>
                        <div className="mb-3">
                            <label className="form-label"> UserEmail</label>
                            <input 
                             type="email" 
                             placeholder="Email" 
                             name="email" 
                             className="form-control"
                             ref={register()}
                             />

                        </div>
                        <div className="mb-3">
                            <label className="form-label"> UserPassword</label>
                            <input
                             type="password" 
                             placeholder="Password"
                              name="password"
                               className="form-control"
                               ref={register()}
                               />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary btn-lg"> Sign Up</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
     );
}
 
export default SignUp;