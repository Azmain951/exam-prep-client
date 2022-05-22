import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css';
import toast from 'react-hot-toast';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    let errorMessage;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (user) {
        navigate('/home');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (error || updateError) {
        errorMessage = <p className='text-danger'>Error: {error?.message || updateError?.message} </p>
    }

    const handleRegister = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        toast.success('User registered successfully!!!');
    }

    return (
        <div className='register w-50 container shadow p-5 rounded mx-auto my-5'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type='text' name='name' placeholder='Your Name' required></input>

                <input type="email" name='email' placeholder='Your Email' required />

                <input type="password" name='password' placeholder='Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept <span className='text-info'>ExamPrep</span> Terms and Conditions</label>

                <input className='w-50 mx-auto btn btn-secondary border-0 mt-2' type="submit" value="Register" disabled={!agree} />
            </form>
            {errorMessage}
            <p>Already have an account? <Link to='/login' className='text-primary pe-auto'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div >
    );
};

export default Register;