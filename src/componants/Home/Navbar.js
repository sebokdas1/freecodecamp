import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css'
import { FaExternalLinkAlt, FaFreeCodeCamp, FaUser } from 'react-icons/fa';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const menuItems = <>
        <li className='lg:hidden search-input-text'><input type="text" placeholder='Search 8,000+ tutorials' /></li>
        <li className='lg:text-white'><a href='https://www.freecodecamp.org/donate' target="_blank">Donate</a></li>
        <li className='lg:text-white'><a href='https://www.freecodecamp.org/learn' target="_blank">Curriculam</a></li>
        <li className='lg:text-white'><a href='https://forum.freecodecamp.org' target="_blank">Forum <span><FaExternalLinkAlt /></span></a></li>
        <li className='lg:text-white'><a href='https://www.freecodecamp.org/news' target="_blank">News <span><FaExternalLinkAlt /></span></a></li>
        <li className='lg:text-white'><a href='https://coderadio.freecodecamp.org' target="_blank">Radio <span><FaExternalLinkAlt /></span></a></li>
        <li className='lg:text-white'><a href="#">Change Language</a></li>
        {user && <li className='lg:text-white hidden lg:block'><button onClick={logOut}>Sign Out</button></li>}
        <li className='lg:text-white lg:hidden'>{user ? <button className="btn btn-ghost" onClick={logOut}>Sign Out</button> : <Link to="/signin">Sign in</Link>}</li>
    </>
    return (
        <div className="navbar nav-bar shadow ">
            <div className="navbar-start nav-div">
                <div className="dropdown">
                    <div className='menu-btn lg:hidden'>
                        <button>MENU</button>
                    </div>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content menu-list mt-3 p-2 shadow rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>


                <div>
                    <input className='input-text-search hidden lg:block' type="text" name="" id="" placeholder='Search 8,000+ tutorials' />
                </div>

                <div className='lg:justify-center'>
                    <Link to="/" className="btn btn-ghost normal-case text-white text-xl"> <span className='flex items-center'>FreeCodeCamp <span className='text-2xl ml-2'><FaFreeCodeCamp /></span></span></Link>
                </div>

                <div className='hidden lg:block'>
                    <div className="dropdown">
                        <div className='menu-btn hidden lg:block'>
                            <button>MENU</button>
                        </div>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content menu-list mt-3 p-2 shadow rounded-box w-72">
                            {menuItems}
                        </ul>
                    </div>
                    {user ? <Link className='signin-link' to="/"><FaUser /></Link> : <Link className='signin-link' to="signin">Sign in</Link>}
                </div>

            </div>

        </div>
    );
};

export default Navbar;