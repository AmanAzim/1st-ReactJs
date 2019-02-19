import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {name:"Aman", age:31},
      {name:"Roza", age:23},
      {name:"Tansen", age:29}
    ]
  };
  SwitchNameHandler=()=>{
    this.setState({
      persons:[
        {name:"Aman Azim", age:32},
        {name:"Roza Azim", age:24},
        {name:"Tansen Khan", age:30}
      ]
    });
  };
  render() {
    return (
      <div className="App">
       <h1>Persons Info</h1>

        <button onClick={this.SwitchNameHandler}>Switch Name</button>

        <Person name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                clickToChange={this.SwitchNameHandler}/>

        <Person name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                clickToChange={this.SwitchNameHandler}>My Hobby: Playing</Person>

        <Person name="Tansen" age="29" clickToChange={this.SwitchNameHandler}/>
      </div>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null,'Hi, I\'m a React App'));
  }
}

export default App;
