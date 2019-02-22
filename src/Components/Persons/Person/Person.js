import React, {Component} from 'react'
import WithClass from '../../../HOC/WithClass';
import CssClass from './Person.css'
//import Radium from 'radium';

class Person extends Component{

 render() {
     ////Creation LifeCycle Hook 3.2
     console.log('[Person.js] Rendering...');

     const buttonStyle = {
         backgroundColor: 'green',
         color: 'white',
         font: 'inherit',
         border: '1px solid blue',
         padding: '8px',
         cursor: 'pointer',

     };

     const rand = Math.random();
     if (rand > 0.7) {
         //throw new Error('Something went Wrong Aman!!');
     }
     return( <WithClass ClassCss={CssClass.Person}>
                 <p key={1}>I am {this.props.name} and I am {this.props.age} years old</p>
                 <p key={2}>{this.props.children}</p>

                 <br key={3}></br>
                 <button style={buttonStyle} key={4} onClick={this.props.clickToDeletePerson}>Click to Delete Person</button>
                 <br key={5}></br>
                 <input type="text" key={6} onChange={this.props.changedName} value={this.props.name}/>
             </WithClass>);
 }
};

//export default Radium(person);
export default Person;
