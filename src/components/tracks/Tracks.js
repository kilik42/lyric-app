import React, { Component } from 'react';
import {Consumer} from '../../context';
/**
 * Tracks
 */
export class Tracks extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          return <h1>Tracks</h1>
          
        }}
      </Consumer>
    );
  }
}


export default Tracks;
