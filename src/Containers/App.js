import React, { Component } from 'react';
import CssClass from './App.css';
import './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

//import Radium, { StyleRoot } from 'radium';

class App extends Component {
    ////Creation LifeCycle Hook 1
  constructor(props){
      super(props);
      console.log('[App.js] Constructor()');
  };

  state={
    persons:[
      {id:1, name:"Aman", age:31},
      {id:2, name:"Roza", age:23},
      {id:3, name:"Tansen", age:29}
    ],
    showPersons:false,
  };

  ////Creation LifeCycle Hook 2
  static getDerivedStateFromProps(props, state){
      console.log('[App.js] getDerivedStateFromProps()', props);
      return state;
  };

  ////Creation LifeCycle Hook 4
  componentDidMount(){
      console.log('[App.js] componentDidMount()');
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

  togglePersonsHandler=()=>{
        const doesShow=this.state.showPersons;
        this.setState({showPersons:!doesShow});
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

  deletePersonsHandler=(index)=>{
      //const neWpersons=this.state.persons;
      //const neWpersons=this.state.persons.splice();
      const neWpersons=[...this.state.persons];
      neWpersons.splice(index, 1);
      this.setState({persons:neWpersons});
  };
  render() {
      ////Creation LifeCycle Hook 3
      console.log('[App.js] render()');

    let persons=null;

    if(this.state.showPersons){
      persons=(
             <Persons persons={this.state.persons}
                      clickToDelete={ (event, index)=>{this.deletePersonsHandler(index)} }
                      changed={(event, person_id)=>{this.ChangeNameHandler(event, person_id)}}
                      />

      );
    }


    return (

            <div className={CssClass.App}>

                <Cockpit appTitle={this.props.appTitle}
                         persons={this.state.persons}
                         showPersons={this.state.showPersons}
                         togglePerson={this.togglePersonsHandler}
                         switchName={()=>this.SwitchNameHandler('Azim')}
                />

                {persons}

            </div>

    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null,'Hi, I\'m a React App'));
  }
}

//export default Radium(App);
export default App;
