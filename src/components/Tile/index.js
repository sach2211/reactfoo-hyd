import React, { Component, PureComponent } from 'react';
import { Analyser } from '../../Analyser';

import './tile.css';
import tshirt from '../../tshirt.svg';

class ProductTile extends Analyser {

  getRandomHex() {
    return (Math.floor(Math.random() * 10000) % 256);
  }

  getRandomColor() {
    const r1 = this.getRandomHex();
    const r2 = this.getRandomHex();
    const r3 = this.getRandomHex();
    return `rgb(${r1}, ${r2}, ${r3})`;
  }

  addToCartClick = () => {
    performance.mark("Click-Detected");
    this.props.addToShortlist(this.props.index);
  }

  render() {
    if (this.props.index === 999) {
      performance.mark("Tile-Rendered");
      try{
        performance.measure("totalRerenderTime", "Click-Detected", "Tile-Rendered");
      } catch (e) {
        console.log("Error in measuring performance time");
      }
    }
    const tileColor = this.getRandomColor();
    return (
      <div 
        className="tileContainer"
        style={{
        backgroundColor: tileColor,
      }}>
      <img src={tshirt}  className="tshirts"/>
        <div className="extraPadding">Product  {this.props.index}</div>
        <button className="extraPadding" onClick={ this.addToCartClick }> Add to Cart </button>
      </div>
    );
  }
}

export default ProductTile;
