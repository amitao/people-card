import React, { Component } from 'react';
import Header from '../Header/Header';
import { Card } from '../Card/Card';

import './App.css';
import { Search } from '../Search/Search';

class App extends Component {

  state = {
    peoples: [],
    searchField: ''
  }

  handleChange = (event) => {
    this.setState({searchField: event.target.value});
  }


  componentDidMount() {
    // fetch the API url and returns a Promise
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())  // returns a json object
    .then( users => this.setState({peoples: users})) // display users in the people array
  }


  render() {

    // desturcturing
    // const peoples = this.state.peoples
    const {peoples, searchField} = this.state;

    // fltered names when search
    const filteredPeoples = peoples.filter( people => 
      people.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return(
      <div className="App">
        <Header />
        <Search 
          placeholder="search people"
          handleChange={this.handleChange}
        />
        <Card peoples={filteredPeoples} />
      </div>
    )
  }
}

export default App;
