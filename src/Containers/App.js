import React, { Component } from 'react';
import CssClass from './App.css';
import './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import Aux from '../HOC/Auxiliary';
import withClass2 from '../HOC/withClass2';

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
    showCockpit:true,
    changeTrackCouter:0,
    authenticated:false,
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

  ////Update LifeCycle Hook 2
  shouldComponentUpdate(nextProps, nextState, nextContext) {
      console.log('[App.js] shouldComponentUpdate()');
      return true;
  }
  ////Update LifeCycle Hook 6
  componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('[App.js] componentDidUpdate()');
  }

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

    this.setState((prevState, props)=> {
        return {persons: neWpersons, changeTrackCouter: prevState.changeTrackCouter + 1}
    });
  };

  deletePersonsHandler=(index)=>{
      //const neWpersons=this.state.persons;
      //const neWpersons=this.state.persons.splice();
      const neWpersons=[...this.state.persons];
      neWpersons.splice(index, 1);
      this.setState({persons:neWpersons});
  };

  authHandler=()=>{
      this.setState({ authenticated:true});
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
                      isAuthenticated={this.state.authenticated}
                      />

      );
    }


    return (
            <Aux>
                <button onClick={()=>{this.setState({showCockpit:!this.state.showCockpit});}}>Remove Cockpit</button>

                {this.state.showCockpit ?  (<Cockpit appTitle={this.props.appTitle}
                                                   personsLength={this.state.persons.length}
                                                   showPersons={this.state.showPersons}
                                                   togglePerson={this.togglePersonsHandler}
                                                   switchName={()=>this.SwitchNameHandler('Azim')}
                                                   Login={this.authHandler}
                                            /> ): null
                }

                {persons}
            </Aux>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null,'Hi, I\'m a React App'));
  }
}
//export default Radium(App);
export default withClass2(App, CssClass.App);
