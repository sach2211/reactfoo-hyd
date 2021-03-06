import React, { Component } from 'react';

// stylesheet
import './App.css';

// components
import ProductTile from './components/Tile';
import Cart from './components/Cart';


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
      // already in cart, ignore
      return;
    } else {
      this.cartMap.set(x, true);
      this.state.shortlisted.map((i) => newShortList.push(i));
      newShortList.push(x);
    }
    this.setState({ shortlisted: newShortList });
  }

  removeItemFromShortlist = (x) => {
    this.cartMap.set(x, false);
    let newShortList = [];
    this.state.shortlisted.map((i) => {
      i !== x ? newShortList.push(i) : null 
    });
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
                keywords={['tshirts', 'react-foo']}
                />
              )
          })
        }
        </div>

        {/* ShortListed Container */}
        <Cart 
          removeItemFromShortlist={this.removeItemFromShortlist}
          shortlisted={this.state.shortlisted}/>
      </div>
    );
  }
}

export default App;
