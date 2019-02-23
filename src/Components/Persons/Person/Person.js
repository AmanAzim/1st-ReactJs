import React, {Component} from 'react'
import WithClass from '../../../HOC/WithClass';
import CssClass from './Person.css'
import PropTypes from 'prop-types'
import AuthContex from '../../../Contex/Auth-contex'
//import Radium from 'radium';

class Person extends Component{

 constructor(props){
     super(props);
     this.inputElementRef=React.createRef();
 }
 componentDidMount() {
    // this.inputElement.focus();
     this.inputElementRef.current.focus();
 }

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
                 <p>I am {this.props.name} and I am {this.props.age} years old</p>
                 <p>{this.props.children}</p>

                 <AuthContex.Consumer>
                     {(context)=> context.authenticated? <p>Authenticated!</p> : <p>Not Authenticated!</p>}
                 </AuthContex.Consumer>

                 <br></br>
                 <button style={buttonStyle} onClick={this.props.clickToDeletePerson}>Click to Delete Person</button>
                 <br></br>
                 <input type="text"
                        onChange={this.props.changedName}
                        value={this.props.name}
                        //ref={(inputAl)=>{this.inputElement=inputAl}}
                        ref={this.inputElementRef}/>
             </WithClass>);
 }
};

//export default Radium(person);
Person.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    clickToDeletePerson:PropTypes.func,
    changedName:PropTypes.func,
};
export default Person;
