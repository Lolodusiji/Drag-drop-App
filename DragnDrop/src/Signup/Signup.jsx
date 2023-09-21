import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase';
import Image from '/imgs/SignArt.jpg';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
    } catch (error) {
      console.log(error);
    }
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
            <Link to={`/Main/MainPage`}>
              <button id="sign" type="submit">SIGN IN</button>
            </Link>
          </form>
          <div className="flex-part">
          <p>Already have an account ?</p>
          <Link to={`/Signin/Signin`}>
          <button id="button">Signin</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
