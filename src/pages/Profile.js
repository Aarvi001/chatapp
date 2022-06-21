import React, {useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import Img from '../mypic.png'
import Camera from '../components/svg/Camera'
import { storage, db, auth } from '../firebase';
import { ref, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
const Profile = () => {
    const [img, setImg] = useState("")
    const [user, setUser] = useState();
useEffect(() => {
    getDoc(doc(db, 'users', auth.currentUser.uid)).then(docSnap => {
        if (docSnap.exists){
                setUser(docSnap.data())
        }
    });
    if (img){
    const uploadImg = async () =>{
        const imgRef = ref(storage, `avatar/${new Date().getTime()} - ${img.name}`
        );

    const snap = await uploadBytes(imgRef, img)
    const url = await getDownloadURL(ref(storage, snap.ref.fullPath))
    try{
        if (user.avatarPath) {
            await deleteObject(ref(storage, user.avatarPath));
            }
    await updateDoc(doc(db, 'users', auth.currentUser.uid), {
        avatar: url,
        avatarPath: snap.ref.fullPath,
    });
    setImg("")
}
    catch(err){
        console.log(err.message)
    }
    console.log(snap.ref.fullPath)
    console.log(url)
};
    uploadImg()
    }
}, [img])
    return(user ? (
    <section>
        <div className="Profile-container">
            <div className="img-container">
                <img src={user.avatar || Img} alt="avatar"/> 
                <div className='overlay'>
                    <div>
                        <label htmlFor='photo'>
                        <Camera />    
                        </label>   
                        <input type="file" accept='image/*'
                         style={{ display:"none"}} id='photo'
                         onChange={(e) => setImg(e.target.files[0])} />
                     </div>
                </div>
            </div>
            
            <div className="text-container">
                <h3>{user.name} </h3>
                <h3>{user.email} </h3> <hr/>
                <small>Joined on: {user.createdAt.toDate().toDateString()} </small>

            </div>
        </div>


    <Outlet/> 
    </section> ) : (null)

    );
}


export default Profile;