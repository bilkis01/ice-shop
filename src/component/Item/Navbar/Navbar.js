import React from 'react';
import { Link } from 'react-router-dom';
import logos from './../../../img/logos.png';
import './../Global.css';


const Navbar = () => {

    const menuItems = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/pages'>Pages</Link></li>

    </>

    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">

                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost btn-circle lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-5 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>

                    <div class="flex">
                        <ul class="menu menu-horizontal px-1">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                <div class="navbar-center py-1">
                    <a class=" nav-pad normal-case text-xl head-first "><img src={logos} alt="" /></a>
                </div>
                <div class="navbar-end">
                    <button class="btn btn-ghost btn-circle">
                        <div class="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span class="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;