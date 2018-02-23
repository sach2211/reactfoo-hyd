import React, { Component } from 'react';

// logos
import logo from './logo.svg';
import cart from './cart.png';

// stylesheet
import './App.css';

// components
import ProductTile from './components/Tile';


class App extends Component {
  constructor() {
    super();
    let arr = [];
    for (let i = 0; i < 1000; i++) arr[i] = i;
    this.state = {
      data: arr,
      shortlisted: []
    };
    this.cartMap = new Map();
  }

  addToShortlist = (x) => {
    console.log("Adding to shortlist ", x);
    let newShortList = [];
    if (this.cartMap.get(x)) {
      // already in cart, remove it.
      this.state.shortlisted.map((i) => { i !== x ? newShortList.push(i) : null });
    } else {
      this.cartMap.set(x, true);
      this.state.shortlisted.map((i) => newShortList.push(i));
      newShortList.push(x);
    }
    this.setState({ shortlisted: newShortList });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tshirts</h1>
        </header>

        {/* Tiles Container */}
        <div className="tilesContainer">
        {
          this.state.data.map((thisProps, index) => {
            return (
              <ProductTile 
                index={index}
                addToShortlist = {this.addToShortlist}
                />
              )
          })
        }
        </div>

        {/* ShortListed Container */}
        <div className="shortlistContainer">
          <img src={cart} className="cartImage" />
          <div className="cartHeading"> Shopping Cart </div>
          {
            this.state.shortlisted.map((p, index) => {
              return <div key={index} className={"shortlistProduct"}> Product {p} </div>
            })
          }
        </div>

      </div>
    );
  }
}

export default App;
