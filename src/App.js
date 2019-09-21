import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/cardList/CardList';


class App extends Component{

  constructor(){
    super();
    this.state = {
       monsters: [],
       searchText: ''
    }

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(users => this.setState({ monsters: users }));
  }

  searchMonster =  e => {
    this.setState({ searchText: e.target.value });
  }

  render(){

    const { monsters, searchText } = this.state; 

    const filteredMonster = monsters.filter( 
       monsters => 
        monsters.name.toLowerCase().includes(searchText.toLowerCase())
    );
      

    return(
        <div className='App'>
          <h1>Monsters Rolodex</h1>
          <input type="search" placeholder="Search Monster" onChange={ this.searchMonster.bind(this) } />
          <CardList monsters={ filteredMonster } />
        </div>
    );
  }
}

export default App;
