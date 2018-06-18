import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    // name: ''
    filter: '',
    songs: ['Touch the sky', 'Jesus walks', 'Gold Digger', 'Stronger']
  }

  filter = (event) => {
    console.log(event.target.value)
    this.setState({
      filter: event.target.value
    })
  }

  // updateName = (event) => {
  //   this.setState({
  //     name: event.target.value
  //   })
  // }

  render() {
    // const { name } = this.state
    const songs = this.state.songs.filter(song => song.includes(this.state.filter))
    return (
      <div className="App">
        <h1>Spotify</h1>
        <form>
          <label htmlFor="search">Search for song:</label>
          <input id="search" onChange={ this.filter } />
        </form>
        { songs.map(song => <p>{song}</p> )}


        {/* Hello { name || 'Guest' }
        <input onChange={this.updateName} /> */}
      </div>
    );
  }
}

export default App;
