import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div class="container logincss  ">
        <h2 class="login1">Sign-in</h2>
      <form class =" my-4 mx-3">
        <div class="form-group ">
            <input type="email" class="form-control inputcss" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
        </div>

        <div class="form-group">
            <input type="password" class="form-control inputcss" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="container" style={{alignItems:"center", display:"flex" ,justifyContent:"center"}}>

          <button type="submit" class="btn btn-primary my-3 loginbtn" style={{width:"50%"}}>Login</button>
        </div>
        </form>

        <span>Don't have an account? </span>
        <Link to="/signup">Signup Here</Link>
    </div>
  )
}

export default Login
