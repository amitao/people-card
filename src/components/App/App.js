import React, { Component } from 'react';
import Header from '../Header/Header';
import { Card } from '../Card/Card';
import { Search } from '../Search/Search';
import './App.css';

class App extends Component {

  state = {
    peoples: [],
    searchField: ''
  }


  componentDidMount() {
    // fetch the API url and returns a Promise
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())  // returns a json object
    .then( users => this.setState({peoples: users})) // display users in the people array
  }

  handleChange(e) {
    this.setState({searchField: e.target.value});
  }

  render() {

    // desturcturing
    // const peoples = this.state.peoples
    const {peoples, searchField} = this.state;
    
    // fltered names when search
    const filteredPeoples = peoples.filter(people => {
      people.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return(
      <div className="App">
        <Header />
        <Search />        
        <input 
          type="search" 
          placeholder="search" 
          onChange={this.handleChange} 
        />
        <Card peoples={filteredPeoples} />
      </div>
    )
  }
}

export default App;
