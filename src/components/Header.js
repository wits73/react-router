import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = props => {
    return (
        <div className="header">
            <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
            <NavLink to="/about/wits73" className="item" activeClassName="active">About</NavLink>
            <NavLink to="/posts" className="item" activeClassName="active">Posts</NavLink>
            <NavLink to="/login" className="item" activeClassName="active">Login</NavLink>
            <NavLink to="/mypage" className="item" activeClassName="active">Mypage</NavLink>
            <NavLink to="/search" className="item" activeClassName="active">Search</NavLink>
        </div>
    );
};


export default Header;