import {React, Component, PureComponent} from 'react';

export class Analyser extends Component {
  shallowCompare(a, b)  {
    let k1 = Object.keys(a);
    let k2 = Object.keys(b);
    if (k1.length !== k2.length)
      return false;
    
    let areEqual = true;
    let keyNames = [];
    for (let i = 0; i < k1.length; i++) {
      if (a[k1[i]] !== b[k2[i]]) {
        areEqual = false;
        keyNames.push(k1[i]);
        // break;
      }
    }

    return {areEqual, keyNames};
  }

  shouldComponentUpdate(nextProps, nextState) {
    let {areEqual, keyNames} = this.shallowCompare(nextProps, this.props);
    if (areEqual) {
      return false;
    }
    console.log('Props that do not match - ', keyNames);
    return true;
  }

}
