import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import { Form } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import './Login.css'
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let errorElement;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        toast.success('User logged in successfully');
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    const handleLogin = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Password reset link sent..Check Email');
        }
        else {
            toast.error('Please enter your email!!!');
        }
    }
    return (
        <div className='login-form container w-50 shadow p-5 rounded mx-auto m-4'>
            < h2 className='text-center' > Please Login</h2 >
            < Form onSubmit={handleLogin} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <input className="btn btn-primary w-50 mx-auto d-block mb-2" type="submit" value='Login' />
            </Form >
            {errorElement}
            < p > New to <span className='text-info'>ExamPrep</span> ? <Link to='/register' className='text-primary pe-auto mt-3'>Please Register</Link></p >
            <p>Forget Password? <button onClick={handleResetPassword} className='btn btn-link text-secondary pe-auto'>Reset Password</button></p>
            <SocialLogin></SocialLogin>
        </div >
    );
};

export default Login;