
import { Link, Outlet } from "react-router-dom";
import { Context } from '../../context/context';
import { React, useContext, useState } from "react";
import '../Layout/Layout.css';
import Logo from '../../images/Logo.png'
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';

function Layout() {

    const { topNavName, setTopNavName, setCart, setEvents } = useContext(Context);
     const [mobile,setmobile]=useState()

    return (
        <div id="container">

            <nav id="top-nav">
                <img id="logo" src={Logo} alt="" />
                <div id="top-nav-links-container-div">
                    <Link to="/home" className="nav-item-top">Home</Link>
                    <Link to="/hikes" className="nav-item-top">Hikes</Link>
                    <Link to="/about" className="nav-item-top">About</Link>
                    <Link to="/contact" className="nav-item-top">Contact</Link>
                    {topNavName == "User" && <Link to="/" className="nav-item-top">Login</Link>}
                    <Link to="/mycalender" className="nav-item-top-cart-calender-icons"><CalendarMonthSharpIcon /></Link>
                    <Link to="/cart" className="nav-item-top-cart-calender-icons"><AddShoppingCartSharpIcon /></Link>
                    <div id="user-welcome">{`${topNavName}`}</div>
                    <button id="sign-out-btn" onClick={() => {
                        setTopNavName('User')
                        localStorage.setItem('loginName', 'User')
                        setCart([])
                        setEvents([])
                    }}>Sign out</button>

                    

                </div>

                <input type="checkbox" id="checkbox"/>
                    <div className="show">
                        <label for="checkbox" class="toggle"  onClick={()=>setmobile(!mobile)} >
                            <div class="bars" id="bar1"></div>
                            <div class="bars" id="bar2"></div>
                            <div class="bars" id="bar3"></div>
                        </label>
                    </div>

            </nav>

            {mobile&&<div className="mobile-nav-bar">
                    <Link to="/home" className="nav-item-top">Home</Link>
                    <Link to="/hikes" className="nav-item-top">Hikes</Link>
                    <Link to="/about" className="nav-item-top">About</Link>
                    <Link to="/contact" className="nav-item-top">Contact</Link>
                    {topNavName == "User" && <Link to="/" className="nav-item-top">Login</Link>}
                    <Link to="/mycalender" className="nav-item-top-cart-calender-icons"><CalendarMonthSharpIcon /></Link>
                    <Link to="/cart" className="nav-item-top-cart-calender-icons"><AddShoppingCartSharpIcon /></Link>
                    <div id="user-welcome">{`${topNavName}`}</div>
                    <button id="sign-out-btn" onClick={() => {
                        setTopNavName('User')
                        localStorage.setItem('loginName', 'User')
                        setCart([])
                        setEvents([])
                    }}>Sign out</button>

                    

                </div>}

            <Outlet></Outlet>

            <nav id="bot-nav">

                <div id="fast-links">
                    <p>Fast Links</p>
                    <Link to="/home" className="nav-item-bot">Home</Link>
                    <Link to="/about" className="nav-item-bot">About</Link>
                    <Link to="/contact" className="nav-item-bot">Contact</Link>



                </div>

                <div id="follow-us">
                    <p>Follow us</p>
                    <a href="https://he-il.facebook.com/" target="_blank" className="nav-item-bot">Facebook</a>
                    <a href="https://www.instagram.com/" target="_blank" className="nav-item-bot">Instagram</a>
                    <a href="https://twitter.com/" target="_blank" className="nav-item-bot">Twitter</a>
                </div>



            </nav>

        </div>





    )

}

export default Layout