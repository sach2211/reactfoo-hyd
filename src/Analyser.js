import {React, Component} from 'react';

export let detectRerenders = (component) => {
  return class detectRerenders extends component {
    shouldComponentUpdate() {
      console.log("From SCU of HOC");
    }
    render() {
      return super.render();
    }
  }
}

export class Analyser extends Component {
  areObjectsEqual(a, b)  {
    let k1 = Object.keys(a);
    let k2 = Object.keys(b);
    if (k1.length !== k2.length)
      return false;
    
    let areEqual = true;
    for (let i = 0; i < k1.length; i++) {
      if (a[k1[i]] !== b[k2[i]]) {
        areEqual = false;
        break;
      }
    }

    return areEqual;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.areObjectsEqual(nextProps, this.props)) {
      // console.log("Wasted Rerender in ", nextProps, this.props, this.props.keywords !== nextProps.keywords);
      // return false;
    } else {
      // console.log("Not a Wasted Rerender in ",nextProps, this.props);
      // return true;
    }
    return true;
  }

}


