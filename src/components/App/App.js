import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';

class App extends Component {

  state = {
    peoples: []
  }


  componentDidMount() {
    // fetch the API url and returns a Promise
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())  // returns a json object
    .then( users => this.setState({peoples: users})) // display users in the people array
  }

  render() {
    return(
      <div className="App">
      <Header />
        {this.state.peoples.map( people => {
          return (
            <h1 key={people.id}>{people.name}</h1>
          )
         })
        }
      </div>
    )
  }
}

export default App;
