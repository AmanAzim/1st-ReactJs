import React, {Component} from 'react'
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
     return (
         <div className={CssClass.Person}>
             <p>I am {this.props.name} and I am {this.props.age} years old</p>
             <p>{this.props.children}</p>

             <br></br>
             <button style={buttonStyle} key={2} onClick={this.props.clickToDeletePerson}>Click to Delete Person</button>
             <br></br>
             <input type="text" onChange={this.props.changedName} value={this.props.name}/>

         </div>
     );
 }
};

//export default Radium(person);
export default Person;
