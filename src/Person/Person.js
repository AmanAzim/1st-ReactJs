import React from 'react'

const person=(props)=>{
   return(
       <div>
           <p>I am {props.name} and I am {props.age} years old</p>
           <p>{props.children}</p>
           <button onClick={props.clickToChange}>Click to change name from child</button>
       </div>
   );
};

export default person;
