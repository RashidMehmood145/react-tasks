import React from 'react'

const Login = () => {
    return (  
        <div>
           <div className="container">
               <div className="text-center mt-5 mb-5"> 
                   <h1>Login</h1>
                 </div>
                <div className="d-flex justify-content-center">
                   <form>
                       <div>
                           <label>UserName</label>
                           <input type="text" placeholder="Enter your Name "  name="username" className="form-control" />
                       </div>
                       <div>
                           <label>email</label>
                           <input type="text" placeholder="Enter your email" name="email" className="form-control" />
                       </div>
                   </form>
                </div>

           </div>
        </div>
    );
}
 
export default Login;