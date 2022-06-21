import React, {useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth, db} from '../firebase';
import { updateDoc, doc, } from 'firebase/firestore'
import { Outlet, useNavigate } from 'react-router-dom';

const login = () => {
    const [data, setData] = useState({
        
        email: "",
        password: "",
        error: null,
        loading: false,
    });

    const navigate = useNavigate();
    const { email, password, error, loading} = data;
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value});
    };
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setData({ ...data, error:null, loading: true});
        if (!email || !password){
            setData({ ...data, error: "All fields Required "})
        }
        try {
            const result = await signInWithEmailAndPassword(auth,email,password);
                await updateDoc(doc(db, 'users', result.user.uid), {
                    isOnline: true,
                });
                setData({ 
                    email: '',
                    password: '',
                    error: null,
                    loading: false,
                });
                navigate('/');
            } catch (error) {
            
        }
    };
    return(
        <section>
            <h3>
                !!! Log into your Account here !!!
            </h3>
            <form className='form' onSubmit={handleSubmit}>


                <div className='input_container'>
                    
                    <input type='email' name='email'
                     placeholder='E- Mail' value={email}
                     onChange={handleChange} />
                </div>

                <div className='input_container'>
                    
                    <input type='password' name='password'
                     placeholder='Password' value={password}
                     onChange={handleChange} />
                </div>
                {error ? <p className='error'> {error} </p> : null}
                <div className='btn_container'>
                    <button className='btn' disabled={loading}>  
                    {loading ? "Logging in .... " : "Log in"}
                    </button>
                </div>
<Outlet />
            </form>
        </section>
        
        );
}


export default login;