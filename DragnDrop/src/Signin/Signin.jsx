import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { signInWithEmailAndPassword , createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import toast from 'react-hot-toast';
// import {createUserWithEmailAndPassword} from
// import { auth } from '../../firebase';
import Image from '/imgs/SignArt.jpg';
import './Signin.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        if (userCredential.user){
            toast.success('login Successfully');
            window.location.href='/dashboard';
        }
      } catch (error) {
        console.log(error);
        switch (error.code) { 
            case 'auth/invalid-password': 
              return toast.error('Password must be 6 characters'); 
       
            case 'auth/wrong-password': 
              return toast.error('Incorrect Password.'); 
       
            case 'auth/too-many-requests': 
              return toast.error('Too many attempt, please try again later.'); 
       
            case 'auth/user-not-found': 
              return toast.error('Account not found'); 
       
            case 'auth/email-already-in-use': 
              return toast.error('Email already in use'); 

              case 'auth/invalid-login-credentials':
                return toast.error('Invalid credentials');
       
            default:
            return toast.error('Something went wrong, please try again later.');
      }
    }

    // try {
    //   const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    //   console.log(userCredential);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="login">
      <div className="login_flex">
        <div className="image_cont">
          <img className="big_img" src={Image} alt="" />
        </div>
        <div className="form_cont">
          <form onSubmit={handleLogin}>
            <h4>SIGNIN</h4>
            <input
              type="text"
              className="inputs"
              name="Username"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br />
            <input
              type="password"
              className="inputp"
              name="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br />
            {/* <Link to={`/Main/MainPage`}> */}
              <button id="sign" type="submit">SIGN IN</button>
            {/* </Link> */}
          </form>
          {/* <div className="flex-part2">
          <p>Dont have an Account ?</p>
          <Link to={`/Signup/Signup`}>
          <button id="button"> Signup</button>
          </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Signin;
