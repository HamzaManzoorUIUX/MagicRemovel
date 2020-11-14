import React from 'react';
import Pulse from 'react-reveal/Pulse';
import AuthContext from '../context';

export default () => {
    const authContext = React.useContext(AuthContext);
    const [username, setusername] = React.useState('');
    const [password, setpassword] = React.useState('');

    return <>
        <div className="d-flex">
            <Pulse left>
                <div className="myLoginPortion" >
                <div className="loginCenter" >
                    <img className='loginLogo'  src={require('../img/logo 2 (1).png')} />
                    <div class="form-wrapper">

                        <div class='full-input1'><label for='name'>Username</label>
                            <input type='text' onChange={(e) => setusername(e.target.value)} name='username' value={username} placeholder="Username"></input></div>

                        <div class='full-input1'><label for='email'>Password</label>
                            <input type='password' onChange={(e) => setpassword(e.target.value)} value={password} name='password' placeholder="Password" ></input></div>
                    </div>
                    <div className="mddfjiiuw">
                        <button className="btn btn-primary btnxto" onClick={() => {
                            if (username == "admin" && password == "admin12345") {
                                authContext.setUserstate({ username: username })
                                localStorage.setItem('loginData', { username: username });

                            }
                        }} > Login</button>
                        <label className=""> Forgot Password</label>

                    </div>
                </div>


            </div>
            </Pulse>
            <Pulse left>   <div className="loginBackGround">
                {/* <img style={{ width: '100%', height: window.innerHeight }} src={require('../img/back1.png')} /> */}
            </div>  </Pulse>
        </div>
    </>
}