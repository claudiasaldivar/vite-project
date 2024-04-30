import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../context';
import './Navbar.scss'; // Importar el archivo Sass donde defines tus estilos

const Navbar = () => {
    const activeStyle = "underline underline-offset-4";
    const { count, setSearchCategory } = useContext(ShoppingCartContext);
    const data = ['/electronics', '/jewelery', '/men', '/women'];

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <NavLink to='/' className="navbar-link" activeClassName={activeStyle} exact>Ecommerce</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink onClick={() => setSearchCategory('electronics')} to={data[0]} className="navbar-link" activeClassName={activeStyle}>Electronics</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink onClick={() => setSearchCategory('jewelery')} to={data[1]} className="navbar-link" activeClassName={activeStyle}>Jewelery</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink onClick={() => setSearchCategory('men')} to={data[2]} className="navbar-link" activeClassName={activeStyle}>Men's clothing</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink onClick={() => setSearchCategory('women')} to={data[3]} className="navbar-link" activeClassName={activeStyle}>Women's clothing</NavLink>
                </li>
            </ul>
            <ul className="navbar-list navbar-right">
                <li className="navbar-item">
                    <NavLink to='/my-orders' className="navbar-link" activeClassName={activeStyle}>My Orders</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to='/my-account' className="navbar-link" activeClassName={activeStyle}>My Account</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to='/sign-in' className="navbar-link" activeClassName={activeStyle}>Sign in</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to='/cart' className="navbar-link" activeClassName={activeStyle}>
                        <ShoppingCartIcon className="navbar-icon" />
                        <span className="navbar-count">{count}</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
