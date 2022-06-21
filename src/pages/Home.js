import React, {useEffect, useState} from 'react';
import { Outlet } from 'react-router-dom';
import { db, auth } from '../firebase';
import { collection, query, where, onSnapshot} from 'firebase/firestore';

const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const userRef = collection(db, 'users')
        const q = query(userRef, where('uid', 'not-in', [auth.currentUser.uid]))
        const unsub = onSnapshot(q, querySnapshot => {
            querySnapshot.forEach(doc => {
                users.push(doc.data())
            })
            setUsers(users)
        });
        return unsub();
    }, [])
    console.log(users)
    return(
        <div> Home Page <Outlet/> </div>
    );
}


export default Home;