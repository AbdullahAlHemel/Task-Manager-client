import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            navigate('/')
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="w-96 ml-8 mb-6 m-auto px-10 btn">
                    <FaGoogle/>Google
            </button>
        </div>
    );
};

export default SocialLogin;