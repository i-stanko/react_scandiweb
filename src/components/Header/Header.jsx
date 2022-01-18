import React, { Component } from 'react';
import style from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
import LogoIcon from '../../svg/logo.svg';
import VectorIcon from '../../svg/vector-down.svg';
import CartIcon from '../../svg/cart.svg';
import getSymbolFromCurrency from 'currency-symbol-map'

class Header extends Component {
  render() {
    return(
      <header className={style.header}>
        <nav className={style.nav}>
          <div className={style.navItem}>
            <NavLink to="/react_scandiweb/women" className={style.navLink}>Women</NavLink>
          </div>
          <div className={style.navItem}>
            <NavLink to="/react_scandiweb/men" className={style.navLink}>Men</NavLink>
          </div>
          <div className={style.navItem}>
            <NavLink to="/react_scandiweb/kids" className={style.navLink}>Kids</NavLink>
          </div>
        </nav>

        <div className={style.logo}>
          <Link to="/react_scandiweb/">
            <img src={LogoIcon} alt="logo" width="32" />
          </Link>
        </div>

        <div className={style.menu}>
          <div className={style.currency}>
            <div>
              {getSymbolFromCurrency('USD')}
            </div>
            <div>
              <img src={VectorIcon} alt="cart" />
            </div>
          </div>
          <div className={style.cart}>
            <Link to="/react_scandiweb/cart">
              <span className={style.cartCount}>2</span>
              <img src={CartIcon} alt="cart" width="20" />
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
