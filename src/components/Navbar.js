import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <h3>
                <Link to="/"> Aarvi Chats</Link>
            </h3>
            <div>
            <Link to="/register"> Register  </Link> <br></br>
            <Link to="/Login"> Login </Link>
            </div>
        </nav>
    );
}


export default Navbar;