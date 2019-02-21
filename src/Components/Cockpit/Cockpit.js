import React from 'react';
import CssClass from "./Cockpit.css";

const Cockpit=(props)=>{
    let classes1=[];
    let btnClass='';

    if(props.showPersons){
        btnClass=CssClass.MyBtn;
    }

    if(props.persons.length<=2)
    {
        classes1.push(CssClass.red);
    }
    if(props.persons.length<=1)
    {
        classes1.push(CssClass.bold);//classes2.push('bold');
    }
    return(
        <div className={CssClass.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className="body">This is working</p>
            <p className={classes1.join(' ')}>This is working too</p>

            <button  onClick={props.switchName}>Switch Name</button>
            <br></br><br></br>
            <button className={btnClass} onClick={props.togglePerson}>Toggle Persons</button>
        </div>
    );
};

export default Cockpit;
