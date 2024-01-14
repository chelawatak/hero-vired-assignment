import React from 'react'
import plus from '../Images/plus.jpg'
import circle from '../Images/circle.png';
import { Link } from 'react-router-dom';
import { DefaultPlayer as Video } from 'react-html5video';
import introVideo from '../Videos/introv.mp4';

const Home = () => {
  return (
  <div class="homeclass" style={{justifyContent:"left" , width:"100%"}}>
        <div className="homeclassleft" >
            <div className="container my-4">
            <h2><span style={{fontWeight:"800"}}>Programs <img src={plus} alt="" /></span></h2>
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


        <div className='container homeclassright' >
          <div class="video" >
            <Video autoPlay muted controls={false} loop width="100%" style={{PointerEvent: "none"}}>
              <source  src={introVideo}  />
            </Video>

            <h2 class="container">Learning Revolutionized: Your personal roadmap to excellence</h2>
            <p class="container">Explore cutting-edge courses at Hero Vired! Elevate your skills fast with online certification programs for working professionals.</p>
          </div>
        </div>


        


    </div>
  )
}

export default Home
