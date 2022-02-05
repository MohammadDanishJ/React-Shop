import React, { useRef, useState } from 'react';
import Container from '../../components/container/container.component';
import './index.styles.scss';
import { useAuth } from '../../context/authContext';
import { Link, useNavigate } from 'react-router-dom';



export const SignUp = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfRef = useRef()

    const { isUser, currentUser, emailSignup, logout, login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setloading] = useState(false);

    const navigate = useNavigate();

    const googleLogin = async (e) => {
        e.preventDefault();
    
        try {
            setError('')
            await login();
            navigate('/')
        } catch (err) {
            return setError(err)
        }
    
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfRef.current.value)
            return setError('Password Do Not Match')

        try {
            setError('')
            setloading(true)
            await emailSignup(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch (e) {
            setError('Failed to Sign Up ' + e.message)
        }

        setloading(false);
    }
    return (
        <>
            <Container>
                <div className='w100 h100vh fl fl-c'>
                    <main className='w100 fl fl-c fl-d-cl'>
                        {!isUser ?
                            <>
                                <h2 className='p12'>Sign Up</h2>
                                <form onSubmit={handleSubmit} className='fl fl-d-cl w100'>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" ref={emailRef} required className='p12' placeholder='Enter Email' spellCheck='false' />

                                    <label htmlFor="password">Password</label>
                                    <input type="password" ref={passwordRef} required className='p12' placeholder='Enter Password' spellCheck='false' />

                                    <label htmlFor="passwordConf">Confirm Password</label>
                                    <input type="passwordConf" ref={passwordConfRef} required className='p12' placeholder='Confirm Password' spellCheck='false' />

                                    {error && <div className='w100 text-center' style={{ color: 'rgb(255 0 0)' }}>{error}</div>}
                                    <div className="p12h"></div>
                                    <button type='submit' className='btn-primary p12' disabled={loading}>Sign Up</button>

                                    <footer className='w100 text-center p12'>Already have an account? <Link to='/login'>Log In</Link></footer>


                                    <button className='login-google p12' onClick={googleLogin}>Sign Up with Google</button>
                                </form>
                            </>
                            :
                            <>
                                <div className='p12'>You Are Already Logged In as <strong>{currentUser.displayName || currentUser.email}</strong></div>
                                <button className='p12 cp' onClick={logout}>Logout ? </button>
                            </>
                        }
                    </main>
                </div>
            </Container>
        </>
    );
};

const LogIn = () => {

    const emailRef = useRef()
    const passwordRef = useRef()

    const { isUser, currentUser, emailSignin, logout, login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setloading] = useState(false);

    const navigate = useNavigate();

    const googleLogin = async (e) => {
        e.preventDefault();
    
        try {
            setError('')
            await login()
            navigate('/')
        } catch (err) {
            return setError(err)
        }
    
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setError('')
            setloading(true)
            await emailSignin(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            setError('Failed to Signup')
        }

        setloading(false);
    }
    return (
        <>
            <Container>
                <div className='w100 h100vh fl fl-c'>
                    <main className='w100 fl fl-c fl-d-cl'>
                        {!isUser ?
                            <>
                                <h2 className='p12'>Log In</h2>
                                <form onSubmit={handleSubmit} className='fl fl-d-cl w100'>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" ref={emailRef} required className='p12' placeholder='Enter Email' spellCheck='false' />

                                    <label htmlFor="password">Password</label>
                                    <input type="password" ref={passwordRef} required className='p12' placeholder='Enter Password' spellCheck='false' />

                                    {error && <div className='w100 text-center' style={{ color: 'rgb(255 0 0)' }}>{error}</div>}
                                    <div className="p12h"></div>
                                    <button type='submit' className='btn-primary p12' disabled={loading}>Log In</button>

                                    <footer className='fl fl-d-cl p12h w100 text-center'>
                                        <Link to='/forgot-password' className='p12 w100 text-center' >Forgot Password?</Link>
                                        <div>Dont have an account? <Link to='/signup'>Sign Up</Link></div>
                                    </footer>

                                    <button className='login-google p12' onClick={googleLogin}>Log In with Google</button>
                                </form>
                            </>
                            :
                            <>
                                <div className='p12'>You Are Already Logged In as <strong>{currentUser.displayName || currentUser.email}</strong></div>
                                <button className='p12 cp' onClick={logout}>Logout ? </button>
                            </>
                        }
                    </main>
                </div>
            </Container>
        </>
    );
};

export const ForgotPassword = () => {

    const emailRef = useRef()

    const { isUser, currentUser, resetPassword, logout } = useAuth();
    const [error, setError] = useState('');
    const [loading, setloading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setError('')
            setloading(true)
            await resetPassword(emailRef.current.value)
            setError('Check your Email to further Instructions')
        } catch {
            setError('Failed to Reset')
        }

        setloading(false);
    }
    return (
        <>
            <Container>
                <div className='w100 h100vh fl fl-c'>
                    <main className='w100 fl fl-c fl-d-cl'>
                        {!isUser ?
                            <>
                                <h2 className='p12'>Password Reset</h2>
                                <form onSubmit={handleSubmit} className='fl fl-d-cl w100'>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" ref={emailRef} required className='p12' placeholder='Enter Email' spellCheck='false' />

                                    {error && <div className='w100 text-center' style={{ color: 'rgb(255 0 0)' }}>{error}</div>}
                                    <div className="p12h"></div>
                                    <button type='submit' className='p12 btn-primary' disabled={loading}>Reset Password</button>

                                </form>
                                <footer className='p12'>Know Your Password? <Link to='/login' className='w100 text-center' >Login</Link></footer>
                            </>
                            :
                            <>
                                <div className='p12'>You Are Already Logged In as <strong>{currentUser.displayName || currentUser.email}</strong></div>
                                <button className='p12 cp' onClick={logout}>Logout ? </button>
                            </>
                        }
                    </main>
                </div>
            </Container>
        </>
    );
};

export default LogIn;