import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Movies from './Movies';
import './App.css';
import { Provider } from 'mobx-react';
import movieStore from './store';

class App extends Component {
  render() {
    return (
      <Provider movieStore={movieStore} >
      <div className="app">
       <SearchBar />
       <Movies />
      </div>
      </Provider>
    );
  }
}

export default App;
