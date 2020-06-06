import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-Box/search-Box.component'



class App extends React.Component{
  constructor(){
    super();

    this.state={monsters: [],
    searchField:""}
}
componentDidMount(){
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(users=>this.setState({monsters:users}))
}
handleChange=(e)=>{
  this.setState({searchField:e.target.value})
}
  render(){

    const{monsters,searchField}=this.state;

    const filterdMonsters=monsters.filter((monster)=>
monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
       < SearchBox handleChange={this.handleChange} placeholder="search monsters"/>
<CardList monsters={filterdMonsters}/>
  
      </div>
    );
  }
}


export default App;
