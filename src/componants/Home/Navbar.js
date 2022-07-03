import { signOut } from 'firebase/auth';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css'
import { FaExternalLinkAlt } from 'react-icons/fa';

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
        <div>
            <div className='hidden lg:block'>
                <div className='free-nav py-2'>
                    <div><input className='pr-8 pl-2' type="text" placeholder='Search 8,000+ tutorials' /></div>
                    <div><Link to="/"><img src="https://i.ibb.co/m88vB38/codecamp.jpg" alt="" /></Link></div>
                    <div className='flex justify-center'>
                        <div className=''>
                            <div className="dropdown">
                                <div className='menu-btn hidden lg:block'>
                                    <button>MENU</button>
                                </div>
                                <ul tabIndex="0" className="menu menu-compact dropdown-content menu-list mt-3 p-1 shadow rounded-box drop-menu">
                                    {menuItems}
                                </ul>
                            </div>
                        </div>
                        <div className='signin-div'>
                            {user ? <span className='text-white ml-5 text-2xl'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span> : <Link className='signin-link' to="signin">Sign in</Link>}
                        </div>
                    </div>
                </div>
            </div>

            <div className='block lg:hidden bg-black py-5'>
                <div className='flex  gap-5'>
                    <div className="dropdown pl-5">
                        <div className='menu-btn '>
                            <button>MENU</button>
                        </div>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content menu-list mt-3 p-2 shadow rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <div className='mobile-link'><Link to="/"><img src="https://i.ibb.co/m88vB38/codecamp.jpg" alt="" /></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;