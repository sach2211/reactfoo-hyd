import React, { Component, PureComponent } from 'react';
import { Analyser } from '../../Analyser';

import cart from '../../cart.png';
import './cart.css';

export default class Cart extends Analyser {

  handleCrossClick = (p) => {
    this.props.removeItemFromShortlist(p);
  }

  render() {
    return (
      <div className="shortlistContainer">
      <img src={cart} className="cartImage" />
      <div className="cartHeading"> Shopping Cart </div>
      {
        this.props.shortlisted.map((p, index) => {
          return (
          <div className={"shortlistProduct"} key={index}>
            <div className={"leftAlign"}> Product {p} </div>
            <div className={"rightAlign"} onClick={() => this.handleCrossClick(p)}> X </div>
          </div>
          )
        })
      }
      </div>
    );
  }
}