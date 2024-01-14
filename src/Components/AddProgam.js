import React from 'react';
import deleteicon from '../Images/delete.png';
import plus from '../Images/plus.jpg'
import circle from '../Images/circle.png';
import { Link } from 'react-router-dom';

const AddProgam = () => {
  return (
    <div class="homeclass">
        <div className="addprogramclassleft">
            <div className="container my-4">
            <h2><span style={{fontWeight:"800"}}>Programs   <img src={plus} alt="" /></span></h2>
            <h6 style={{fontWeight:"800"}}> 48 total</h6>
            </div>


            <nav class="navbar navbar-light ">
            <form class="form-inline">
                <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" class="form-control" placeholder="Search" aria-label="search" aria-describedby="basic-addon1"/>
                </div>
            </form>

            <div class="my-2">
            <button class="mx-1" style={{borderRadius:"20px", backgroundColor:"white", border:"1px solid black"}}>All</button>
            <button class="mx-1" style={{borderRadius:"20px", backgroundColor:"white", border:"1px solid black"}}>CSE</button>
            <button class="mx-1" style={{borderRadius:"20px", backgroundColor:"white", border:"1px solid black"}}>ECE</button>
            <button class="mx-1" style={{borderRadius:"20px", backgroundColor:"white", border:"1px solid black"}}>ME</button>
            </div>
            </nav>


            <div>
                <button class="buttonap" style={{borderTop:"2px solid #c4c4c4"}}>
                    <Link to="/addprogram">
                    <div style={{display:"flex", alignItems:"center", display:"flex" ,justifyContent:"left"}}>
                        <div style={{width:"10%"}}>
                        <img src={circle} alt="" style={{width:"100%"}}/>
                        </div>

                        <div style={{width:"90%", alignItems:"center", display:"flex" ,justifyContent:"left"}}>
                            <h5 class="mx-1 my-1">New program</h5>
                        </div>
                    </div>
                    </Link>
                </button>


                <button class="buttonap">
                    <div style={{display:"flex", alignItems:"center", display:"flex" ,justifyContent:"left"}}>
                        <div style={{width:"10%"}}>
                            <img src={circle} alt="" style={{width:"100%"}}/>
                        </div>

                        <div style={{width:"90%", alignItems:"center", display:"block" ,justifyContent:"left"}}>
                            <h6 class="mx-2 my-1">Program 1</h6>
                            <label htmlFor="" style={{fontWeight:"500", fontSize:"small",  marginLeft:"5px"}}>Last modified: 6/12/2023</label>
                        </div>
                        
                    </div>
                </button>

                <button class="buttonap">
                    <div style={{display:"flex", alignItems:"center", display:"flex" ,justifyContent:"left"}}>
                        <div style={{width:"10%"}}>
                            <img src={circle} alt="" style={{width:"100%"}}/>
                        </div>

                        <div style={{width:"90%", alignItems:"center", display:"block" ,justifyContent:"left"}}>
                            <h6 class="mx-2 my-1">Program 2</h6>
                            <label htmlFor="" style={{fontWeight:"500", fontSize:"small",  marginLeft:"5px"}}>Last modified: 11/12/2023</label>
                        </div>
                        
                    </div>
                </button>

                <button class="buttonap">
                    <div style={{display:"flex", alignItems:"center", display:"flex" ,justifyContent:"left"}}>
                        <div style={{width:"10%"}}>
                            <img src={circle} alt="" style={{width:"100%"}}/>
                        </div>

                        <div style={{width:"90%", alignItems:"center", display:"block" ,justifyContent:"left"}}>
                            <h6 class="mx-2 my-1">Program 3</h6>
                            <label htmlFor="" style={{fontWeight:"500", fontSize:"small",  marginLeft:"5px"}}>Last modified: 15/12/2023</label>
                        </div>
                        
                    </div>
                </button>

                <button class="buttonap">
                    <div style={{display:"flex", alignItems:"center", display:"flex" ,justifyContent:"left"}}>
                        <div style={{width:"10%"}}>
                            <img src={circle} alt="" style={{width:"100%"}}/>
                        </div>

                        <div style={{width:"90%", alignItems:"center", display:"block" ,justifyContent:"left"}}>
                            <h6 class="mx-2 my-1">Program 4</h6>
                            <label htmlFor="" style={{fontWeight:"500", fontSize:"small",  marginLeft:"5px"}}>Last modified: 22/12/2023</label>
                        </div>
                        
                    </div>
                </button>
                
            </div>
            
        </div>


        <div className='container homeclassright'>
            <h2 class="my-4"><span style={{fontWeight:"800"}}>Add Program</span></h2>
            <p> <span style={{color:"red"}}>*</span> Required to save as program</p>
            
            <h2><span style={{fontWeight:"700"}}>Confirm Progam</span></h2>

            <form>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="" style={{fontWeight:"bold"}}> <span style={{color:"red"}}>*</span> Price</label>
                        <input type="" class="form-control" id="" placeholder="Enter price in INR"/>
                        <label className='mx-2' style={{fontWeight:"500", fontSize:"13px"}}> You are licenced to sell on this price.</label>
                    </div>

                    <div class="form-group col-md-4 ">
                        <label for="inputPassword4"  style={{fontWeight:"bold"}}><span style={{color:"red"}}>*</span> Domain</label>
                        <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>Computer Science</option>
                        <option>Electronics</option>
                        <option>Communication</option>
                        <option>Mechanical</option>
                    </select>
                    </div>

                    <div class="form-group col-md-2 mx-4 my-5">
                        <span><input class="form-check-input" type="checkbox" id="gridCheck"/></span>
                        <label class="form-check-label" for="gridCheck">Placement Assurance</label>
                    </div>
                </div>


                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="" style={{fontWeight:"bold"}}><span style={{color:"red"}}>*</span> Name</label>
                        <input type="text" class="form-control" id="text" placeholder="Enter course name"/>
                    </div>

                    <div class="form-group col-md-3 mx-3">
                        <label for="" style={{fontWeight:"bold"}}><span style={{color:"red"}}>*</span> Program Type</label>

                        <div className="container row mx-3">
                            <input class="form-check-input my-2"  type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                            <p class="form-check-label my-1"   for="exampleRadios1">FT</p>

                            <input class="form-check-input mx-5 my-2" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                            <p class="form-check-label mx-5  my-1" for="exampleRadios1">PT</p>
                        </div>               
                    </div>


                    <div class="form-group col-md-3 mx-3">
                        <label for="" style={{fontWeight:"bold"}}><span style={{color:"red"}}>*</span> Registration Open</label>

                        <div className="container row mx-3">
                            <input class="form-check-input my-2"  type="radio" name="exampleRadios2" id="exampleRadios1" value="option1"/>
                            <p class="form-check-label my-1"   for="exampleRadios2">Yes</p>

                            <input class="form-check-input mx-5 my-2" type="radio" name="exampleRadios2" id="exampleRadios1" value="option1"/>
                            <p class="form-check-label mx-5  my-1" for="exampleRadios2">No</p>
                        </div>               
                    </div>
                    
                </div>

                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="" style={{fontWeight:"bold"}}><span style={{color:"red"}}>*</span> University Name/Partner</label>
                        <input type="" class="form-control" id="" placeholder=""/>
                    </div>


                    <div class="form-group col-md-4">
                        <label for="" style={{fontWeight:"bold"}}><span style={{color:"red"}}>*</span> Certificate or Diploma</label>
                        <input type="" class="form-control" id="" placeholder=""/>
                    </div>

                    <div class="form-group col-md-4">
                        <label for="" style={{fontWeight:"bold"}}><span style={{color:"red"}}>*</span> Faculty Profile</label>
                        <input type="" class="form-control" id="" placeholder="Enter faculty name"/>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="" style={{fontWeight:"bold"}}><span style={{color:"red"}}>*</span> Learning Hours/Duration</label>
                        <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>1 Month</option>
                        <option>2 Months</option>
                        <option>3 Months</option>
                        <option>4 Months</option>
                        <option>5 Months</option>
                        <option>6 Months</option>
                        <option>7 Months</option>
                        <option>8 Months</option>
                        <option>9 Months</option>
                        <option>10 Months</option>
                        <option>11 Months</option>
                        <option>12 Months</option>
                        </select>
                    </div>


                    <div class="form-group col-md-4">
                        <label for="" style={{fontWeight:"bold"}}>Eligibility criteria</label>
                        <input type="" class="form-control" id="" placeholder=""/>
                    </div>

                    <div class="form-group col-md-4">
                        <label for="" style={{fontWeight:"bold"}}><span style={{color:"red"}}>*</span> Image URL</label>
                        <input type="" class="form-control" id="" placeholder="Enter URL"/>
                    </div>
                </div>

                <div className="form-row">
                    <div class="form-group col">            
                    <label style={{fontWeight:"bold"}}><span style={{color:"red"}}>*</span> Description</label>
                    <textarea class="form-control" aria-label="With textarea" placeholder='Program information'></textarea>

                    </div>
                </div>

                <div className="container buttoncontainer" style={{ borderTop:"2px solid #c4c4c4", padding:"10px" ,marginTop:"10%"}}>
                    <div className="container" style={{width:"45%" ,display:"flex", alignItems:"center", display:"flex" ,justifyContent:"left"}}>
                        <button type="submit"class="btn btn-primary " style={{marginBottom:"10px", color:"red", border:"1.5px solid red", backgroundColor:"white"}}> <img src={deleteicon} alt="" /> Delete</button>
                    </div>

                    <div className="container" style={{width:"50%" , alignItems:"center", display:"flex" ,justifyContent:"right"}}>
                        <button type="submit"class="btn btn-light mx-2" style={{border:"1.5px solid black"}}>Save draft</button>
                        <button type="submit"class="btn btn-primary">Save program</button>
                    </div>
                </div>
                
                </form>
        </div>


    </div>
    
  )
}

export default AddProgam
