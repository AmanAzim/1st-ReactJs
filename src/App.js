import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {name:"Aman", age:31},
      {name:"Roza", age:23},
      {name:"Tansen", age:29}
    ],
    showPersons:false,
  };
  SwitchNameHandler=(newName)=>{
    this.setState({
      persons:[
        {name:newName, age:32},
        {name:"Roza Azim", age:24},
        {name:"Tansen Khan", age:30}
      ]
    });
  };
  ChangeNameHandler=(event)=>{
    this.setState({
      persons:[
        {name:"Aman", age:32},
        {name:event.target.value, age:24},
        {name:"Tansen", age:30}
      ]
    });
  };
  togglePersonsHandler=()=>{
      const doesShow=this.state.showPersons;
      this.setState({showPersons:!doesShow});
  };
  render() {
    return (
      <div className="App">
       <h1>Persons Info</h1>

        <button onClick={()=>this.SwitchNameHandler('Azim')}>Switch Name</button>
        <br></br>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>

        { this.state.showPersons===true ?
            <div>
            <Person name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            clickToChange={this.SwitchNameHandler.bind(this, 'Rumman')}/>

            <Person name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            clickToChange={this.SwitchNameHandler.bind(this, 'Rumman-from child2 comp')}
            changed={this.ChangeNameHandler}>My Hobby: Playing</Person>

            <Person name="Tansen"
            age="29"/>
            </div> : null
        }
      </div>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null,'Hi, I\'m a React App'));
  }
}

export default App;
