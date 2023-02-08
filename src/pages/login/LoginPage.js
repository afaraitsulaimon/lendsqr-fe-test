import React, { useState } from "react";
import './login.scss';
import logo from '../../images/logo-group.jpg';
import theLeftImage from '../../images/login-design-image.png';

const LoginPage = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordShown, setPasswordShown] = useState(false);


    const emailhandler = (e) => {
        setEmail(e.target.value);
    }


    const passHandler = (e) => {
        setPassword(e.target.value);
    }

    const togglePassword = () => {
      
        setPasswordShown(!passwordShown);
      };

  return (
    <div className="container">
      <nav>
        <div className="logoHolder">
            <img src={logo} alt="logoDesign" className="logo" />

        </div>
      </nav>
      <main>
        <section className="leftHolder">
            <div className="leftImageHolder">
                <img src={theLeftImage} alt="dipslayImage" />
            </div>
        </section>

        <section className="rightHolder">
            <div className="rightContentHolder">
                <div className="topFormContent">
                <h2>Welcome!</h2>
                <p>Enter details to login.</p>
                </div>
                

                <div className="theForm">
                <form action="">
                    <div>
                        <input type="text" placeholder="Email" onChange={emailhandler} value={email}  />
                    </div>

                    <div className="passwordInputHolder">
                        <input type={passwordShown ? 'text' : 'password'} placeholder="Password" onChange={passHandler} value={password} />
                        <p onClick={togglePassword}>SHOW</p>
                    </div>

                    <p className="forgotP"><a href="/">Forgot PASSWORD?</a></p>

                    <button type="submit">
                        LOG IN
                    </button>
                </form>
                </div>

            </div>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
