import React, { Component } from 'react';
import style from './Section.module.css';
import ProductImg from '../../img/product-img.png';
import getSymbolFromCurrency from 'currency-symbol-map'

class Section extends Component {
  render() {
    return(
      <div className={style.section}>
        <h1 className={style.title}>Category name</h1>

        <div className={style.product}>
          <div className={style.card}>
            <img src={ProductImg} className={style.productImg} />
            <h3 className={style.productTitle}>Apollo Running Short</h3>
            <h3 className={style.productPrice}>
              {getSymbolFromCurrency('USD')}50.00
            </h3>
          </div>
          <div className={style.card}>
            <img src={ProductImg} className={style.productImg} />
            <h3 className={style.productTitle}>Apollo Running Short</h3>
            <h3 className={style.productPrice}>
              {getSymbolFromCurrency('USD')}50.00
            </h3>
          </div>
          <div className={style.card}>
            <img src={ProductImg} className={style.productImg} />
            <h3 className={style.productTitle}>Apollo Running Short</h3>
            <h3 className={style.productPrice}>
              {getSymbolFromCurrency('USD')}50.00
            </h3>
          </div>
          <div className={style.card}>
            <img src={ProductImg} className={style.productImg} />
            <h3 className={style.productTitle}>Apollo Running Short</h3>
            <h3 className={style.productPrice}>
              {getSymbolFromCurrency('USD')}50.00
            </h3>
          </div>
          <div className={style.card}>
            <img src={ProductImg} className={style.productImg} />
            <h3 className={style.productTitle}>Apollo Running Short</h3>
            <h3 className={style.productPrice}>
              {getSymbolFromCurrency('USD')}50.00
            </h3>
          </div>
          <div className={style.card}>
            <img src={ProductImg} className={style.productImg} />
            <h3 className={style.productTitle}>Apollo Running Short</h3>
            <h3 className={style.productPrice}>
              {getSymbolFromCurrency('USD')}50.00
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
