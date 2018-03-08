import {React, Component, PureComponent} from 'react';

export class Analyser extends Component {
  shallowCompare(a, b)  {
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
    if (this.shallowCompare(nextProps, this.props)) {
      return false;
    }
    return true;
  }

}


