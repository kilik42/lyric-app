import React, { Component } from 'react';
import axios from 'axios';
const Context = React.createContext();

/**
 * Provider
 */
export class Provider extends Component { // eslint-disable-line react/prefer-stateless-function
  state ={
    track_list: [],
    heading: 'Top 10 tracks'

  };

  componentDidMount() {
      axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&us=it&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res =>{
          console.log(res.data);
          this.setState({track_list: res.data.message.body.track_list});
        })
        .catch(err=> console.log(err));
  }



  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
