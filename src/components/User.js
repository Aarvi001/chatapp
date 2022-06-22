import React from "react";
import Img from '../mypic.png'
const User = ({user, selectUser}) => {
    return (
        <div className='user-wrapper' onClick ={() => selectUser(user)}>
                <div className='user-info'>
                    <div className='user-detail'>
                        <img src={user.avatar || Img} alt = 'avatar' className='avatar' />
                        <h4> {user.name} </h4>
                        <div className={ `user_status ${user.isOnline ? 'online': 'offline'}`}> 
                        {user.isOnline ? ':)': ':('}
                         </div>

                    </div>
                </div>
        </div>)
}

export default User;