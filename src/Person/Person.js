import React from 'react'
import './Person.css'

const person=(props)=>{
   const buttonStyle={
        backgroundColor:'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px',
       cursor:'pointer'
   };
   return(
       <div >
           <p>I am {props.name} and I am {props.age} years old</p>
           <p>{props.children}</p>
           <button style={buttonStyle} onClick={props.clickToChange}>Click to change name</button>
           <br></br>
           <button style={buttonStyle} onClick={props.clickToDelete}>Click to Delete Person</button>
           <br></br>
           <input type="text" onChange={props.changed} value={props.name}/>
       </div>
   );
};

export default person;
