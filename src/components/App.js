import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigIndex from './PigIndex';
// import FilterPig from './FilterPig';

class App extends Component {



  render() {
    return (
      <div className="App">
        < Nav />
        <PigIndex pigList={hogs} />
      </div>
    )
  }
}

export default App;
