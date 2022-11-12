import React from "react";
import s from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = (props) => {
    return (
        <div>
            <nav className = {s.nav}>
                <div className = {s.item}>
                <Link to="/profile" activeClassName={s.activelink}>Profile</Link>
                </div>
                <div className = {s.item}>
                <Link to="/dialogs">Messages</Link>
                </div>
                <div className = {s.item}>
                <Link to="/news">News</Link>
                </div>
                <div className = {s.item}>
                <Link to="/music">Music</Link>
                </div>
                <div className = {s.item}>
                <Link to="/settings">Settings</Link>
                </div>
        </nav>
        <div className = {s.friend}>
            <Friends friendsData={props.state.friendsData} />
        </div>
      </div>
    )
}
export default Navbar;