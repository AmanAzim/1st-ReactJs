import React, {useEffect, useRef, useContext} from 'react';
import CssClass from "./Cockpit.css";
import AuthContex from '../../Contex/Auth-contex'

const Cockpit=(props)=>{

    const buttonRef=useRef(null);

    const authContext=useContext(AuthContex);

    //runs on any update of the component
    useEffect(()=>{
        console.log('[Cockpit.js] 1st useEffect()');
        return ()=>{  console.log('[Cockpit.js] 1nd cleanup in useEffect()');};
    });

    //runs on particular property change
    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect()');

        return ()=>{  console.log('[Cockpit.js] 2nd cleanup in useEffect()');}
    }, [props.persons]);

    //runs on the begining and the end
    useEffect(()=>{
        console.log('[Cockpit.js] 3rd useEffect()');

        const timer=setTimeout(()=>{/*alert('Saved data to cloud')*/}, 1000);

        buttonRef.current.click();

        return ()=>{
            clearTimeout(timer);
            console.log('[Cockpit.js] 3rd cleanup in useEffect()');
        };

    },[]);



    let classes1=[];
    let btnClass='';

    if(props.showPersons){
        btnClass=CssClass.MyBtn;
    }

    if(props.personsLength<=2)
    {
        classes1.push(CssClass.red);
    }
    if(props.personsLength<=1)
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

            <AuthContex.Consumer>
                {(contex)=> <button  className={btnClass} onClick={contex.Login}>Login</button>}
            </AuthContex.Consumer>

            <button  className={btnClass} onClick={authContext.Login}>Login (useContext()-Hook)</button>

            <br></br><br></br>
            <button ref={buttonRef} className={btnClass} onClick={props.togglePerson}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(Cockpit);
