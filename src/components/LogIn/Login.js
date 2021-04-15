import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config"
import { handleGoogleSingIN, initializeLogin } from './LoginManage';
import './Login.css'

const Login = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const history = useHistory();
    // const location = useLocation();
    // const { from } = location.state || { from: { pathname: "/" } };

    // if (firebase.apps.length === 0) {
    //     firebase.initializeApp(firebaseConfig);
    // }

    // const handleGoogleSignIn = () => {
    //     var provider = new firebase.auth.GoogleAuthProvider();
    //     firebase.auth().signInWithPopup(provider).then(function (result) {
    //         const { displayName, email } = result.user;
    //         const signedInUser = { name: displayName, email }
    //         setLoggedInUser(signedInUser);
    //         storeAuthToken();
    //     }).catch(function (error) {
    //         const errorMessage = error.message;
    //         console.log(errorMessage);
    //     });
    // }

    // const storeAuthToken = () => {
    //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    //         .then(function (idToken) {
    //             sessionStorage.setItem('token', idToken);
    //             history.replace(from);
    //         }).catch(function (error) {
    //             // Handle error
    //         });

    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        password: "",
        photo: "",
    });
    console.log(user);

    initializeLogin();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    console.log(loggedInUser)

    const googleSignIn = () => {
        handleGoogleSingIN().then((res) => {
            handleResponse(res, true);
        });
    };

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    };

    return (
        // <div className="login-page container">
        //     <div className="row align-items-center" style={{ height: "100vh" }}>
        //         <div className="col-md-6 shadow p-5">
        //             <div className="form-group">
        //                 <label htmlFor="">User Name</label>
        //                 <input type="text" className="form-control" />
        //             </div>
        //             <div className="form-group">
        //                 <label htmlFor="">Password</label>
        //                 <input type="password" className="form-control" />
        //             </div>
        //             <div className="form-group">
        //                 <label htmlFor="" className="text-danger">Forgot your password?</label>
        //             </div>
        //             <div className="from-group mt-5">
        //                 <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
        //             </div>
        //         </div>
        //         <div className="col-md-6 d-none d-md-block align-self-end">
        //             <img className="img-fluid" src="" alt="" />
        //         </div>
        //     </div>
        // </div>
        <div>
            <div className="logo">
                {/* <img src={logo} alt="" /> */}
            </div>
            <div className="login">
                <div className="google-login">
                    <h2>Login with google</h2>
                    <div className="signIn">
                        <div>
                            {/* <img className="google-icon" src={googleIcon} alt="" /> */}
                        </div>
                        <button className="signIn-btn" onClick={googleSignIn}>
                            Sign In with google
              </button>
                        <br />
                    </div>
                    <small>
                        Don't have an account?{" "}
                        <span>
                            <a href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp">
                                {" "}
                  Create account
                </a>
                        </span>{" "}
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Login;
