import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {id:1, name:"Aman", age:31},
      {id:2, name:"Roza", age:23},
      {id:3, name:"Tansen", age:29}
    ],
    showPersons:false,
  };
  SwitchNameHandler=(newName)=>{
    this.setState({
      persons:[
        {id:1, name:newName, age:32},
        {id:2, name:"Roza Azim", age:24},
        {id:3, name:"Tansen Khan", age:30}
      ]
    });
  };
  ChangeNameHandler=(event, id)=>{
    const personIndex=this.state.persons.findIndex((per)=>{ return per.id===id});

    const onePerson={...this.state.persons[personIndex]};
    //const onePerson=Object.assign({}, this.state.persons[personIndex]);
    onePerson.name=event.target.value;

    const neWpersons=[...this.state.persons];
    neWpersons[personIndex]=onePerson;

    this.setState({persons:neWpersons});
  };
  togglePersonsHandler=()=>{
      const doesShow=this.state.showPersons;
      this.setState({showPersons:!doesShow});
  };
  deletePersonsHandler=(index)=>{
      //const neWpersons=this.state.persons;
      //const neWpersons=this.state.persons.splice();
      const neWpersons=[...this.state.persons];
      neWpersons.splice(index, 1);
      this.setState({persons:neWpersons});
  };
  render() {
    const buttonStyle={
          backgroundColor:'green',
          color:'white',
          font:'inherit',
          border:'1px solid blue',
          padding:'8px',
          cursor:'pointer'
      };
    let persons=null;

    if(this.state.showPersons){
      persons=(
          <div>
            {this.state.persons.map((person, index)=>{
                       return <Person name={person.name}
                                      age={person.age}
                                      key={person.id}
                                      clickToDelete={ ()=>{this.deletePersonsHandler(index)} }
                                      changed={(event)=>{this.ChangeNameHandler(event, person.id)}}
                                      />} )
            }
        </div>
      );
      buttonStyle.backgroundColor='red';
    }

    return (
      <div className="App">
       <h1>Persons Info</h1>

        <button onClick={()=>this.SwitchNameHandler('Azim')}>Switch Name</button>
        <br></br>

        <button style={buttonStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}

        <hr></hr>
        <Person name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                clickToChange={this.SwitchNameHandler.bind(this, 'Rumman')}/>

        <Person name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                clickToChange={this.SwitchNameHandler.bind(this, 'Rumman-from child2 comp')}
                changed={this.ChangeNameHandler}>My Hobby: Playing</Person>

        <Person name="Tansen" age="29"/>
      </div>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null,'Hi, I\'m a React App'));
  }
}

export default App;
