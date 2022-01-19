import React, { Component } from 'react';
import style from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import CategoryPage from "../pages/CategoryPage/CategoryPage";

class Layout extends Component {
  render() {
    return(
      <>
        <Header />
        <main className={style.main}>
          <Outlet />
          <CategoryPage />
        </main>
      </>
    );
  }
}

export default Layout;
