import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div class="container logincss ">
        <h2 class="login1 ">Create Acccount</h2>
      <form class = "my-5 mx-3">

      <div class="form-group ">
            <input type="text" class="form-control inputcss" id="exampleInputEmail1" placeholder="Full Name" />
        </div>

        <div class="form-group ">
            <input type="email" class="form-control inputcss" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
        </div>

        <div class="form-group">
            <input type="password" class="form-control inputcss" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="container" style={{alignItems:"center", display:"flex" ,justifyContent:"center"}}>

          <button type="submit" class="btn btn-primary my-3 loginbtn" style={{width:"50%"}}>Signup</button>
        </div>

        <div>
            <span>Already have an account? </span>
            <Link to="/login">Login Here</Link>
        </div>
        
        </form>

        
    </div>
  )
}

export default Signup
