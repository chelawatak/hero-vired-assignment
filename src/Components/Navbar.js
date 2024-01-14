import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo1 from '../Images/hero.png';

const Navbar = () => {
    return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark" style={{color:"white", backgroundColor:"#040137"}}>
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler mx-5 navbtn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div class="navbtn" style={{display:"flex"}}>
            <span style={{color:"white" }} class="navbar-toggler-icon my-2"></span>
            <Link class="nav-link mx-3" to="/"><img src={logo1} alt="logo" style={{borderRadius:"6px"}}/></Link>
            </div>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active row">
                <Link class="removesmall nav-link mx-3" to="/"><img src={logo1} alt="logo" style={{borderRadius:"6px"}}/></Link>

            </li>

            <li>
                
            <Link className="mx-3 my-2 btn btn-primary navbarbtn1" to="/" role="button">Home <i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
            </li>
            </ul>

            
            <Link className="mx-3 btn btn-primary navbarbtn1" to="/login" role="button">Login <i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
            <Link className="mx-2 btn btn-primary navbarbtn1" to="/signup" role="button">Signup <i className="fa fa-arrow-right" aria-hidden="true"></i></Link>

        </div>
        
        <div>
        </div>
              
        </nav>
    </div>
  )
}

export default Navbar
