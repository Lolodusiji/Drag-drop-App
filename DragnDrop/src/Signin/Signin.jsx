import React from 'react'
import Image from "/imgs/SignArt.jpg"
// import { FcGoogle } from 'react-icons/fc';
// import React, { useEffect, useState } from "react";

// import { Link } from "react-router-dom";

import "./Signin.css"

const Signin = () => {
  return (
    <div>
        <div className='login'>
         <div className='login_flex'>
             <div className='image_cont'>
            <img className='big_img' src={Image} alt="" />
             </div>

             {/* <div className='social_login'  onClick={()=>{handleClick()}}> */}
                 {/* <FcGoogle color='#DC5425' size={23}/> */}
                 <div className='form_cont'>
                 <form>
                    <h4>SIGNIN</h4>
                        <input type="text" className="inputs" name="Username" placeholder="Username"/><br/>
                        {/* <p class="err-msg1">cant be blank</p> */}
                        <input type="password" className="inputp" name="Password" placeholder="Password"></input><br/>
                        {/* <p class="err-msg2">Password error</p> */}
                            {/* <a className="input3"href=""> */}
                                <button id="sign">SIGN IN</button>
                    </form>
                </div>
             </div>
             </div>
    </div>
  )
}

export default Signin;