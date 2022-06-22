import React, {useEffect, useState} from 'react';
import { Outlet } from 'react-router-dom';
import { db, auth } from '../firebase';
import { collection, query, where, onSnapshot} from 'firebase/firestore';
import User  from '../components/User'

const Home = () => {
    const [users, setUsers] = useState([])
    const [chat, setChat] = useState("")
    
    useEffect(() => {
        const userRef = collection(db, 'users')
        const q = query(userRef, where('uid', 'not-in', [auth.currentUser.uid]))
        const unsub = onSnapshot(q, querySnapshot => {
            let users = [];
            querySnapshot.forEach(doc => {
                users.push(doc.data())
            })
            setUsers(users)
        });
        return () => unsub();
    }, []);

    const selectUser = (user) => {
        setChat(user)
        console.log(user);
    }

    return(
        <div className='home-container'> 
         <div className='users-container'>
            {users.map(user => <User key = {user.uid} user={user} selectUser = {selectUser} />)}
         </div>
         <div className='messages-container'>
            {chat ? <div className='message_user'> 
            <h3>{chat.name}</h3>
            </div>: <div>  <h3 className="no_conv">Select a User</h3> </div>
            }
         </div>
         <Outlet/> </div>
    );
}


export default Home;