import React, { Component, PureComponent } from 'react';
import { Analyser } from '../../Analyser';

import cart from '../../cart.png';
import './cart.css';

export default class Cart extends Analyser {

  handleCrossClick = (p) => {
    console.log("Removing p from shortlist", p);
    this.props.removeItemFromShortlist(p);
  }

  render() {
    return (
      <div className="shortlistContainer">
        <img src={cart} className="cartImage" />
        <div className="cartHeading"> Shopping Cart </div>
        {
          this.props.shortlisted.map((p, index) => 
            <CartRow key={p} pid={p} crossClick={this.handleCrossClick} />
          )
        }
      </div>
    );
  }
}

class CartRow extends Analyser {
  render() {
    return (
      <div className={"shortlistProduct"} >
        <div className={"leftAlign"}> Product {this.props.pid} </div>
        <div className={"rightAlign"} onClick={() => this.props.crossClick(this.props.pid)}> X </div>
      </div>
    );
  }
}