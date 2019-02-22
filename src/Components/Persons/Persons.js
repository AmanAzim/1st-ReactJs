import React, {PureComponent} from 'react';
//import ErrorBoundary from "../../Containers/App";
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
import Person from  './Person/Person'

class Persons extends PureComponent{
    ////Update LifeCycle Hook 1
    static getDerivedStateFromProps(props, state){
        console.log('[Persons.js] getDerivedStateFromProps()');
        return state;
    }
    ////Update LifeCycle Hook 2
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate()');
       if(nextProps.persons!==this.props.persons)
          {
             return true;
          }
          else{
             return false;
          }
    }
    ////Update LifeCycle Hook 4
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate()');
        return {message:'Snapshot!'};
    }
    ////Update LifeCycle Hook 5
    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('[Persons.js] componentDidUpdate()');
        console.log('[Persons.js] componentDidUpdate()-'+snapShot.message);
    }

    ////for cleanup work
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount()');
    }

    render() {
        ////Creation LifeCycle Hook 3.1 ////Update LifeCycle Hook 3
        console.log('[Persons.js] Rendering...');

        return this.props.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                <Person name={person.name}
                        age={person.age}
                        clickToDeletePerson={() => {
                            this.props.clickToDelete(index)
                        }}
                        changedName={(event) => {
                            this.props.changed(event, person.id)
                        }}/>
            </ErrorBoundary>
        });
    }
};

export default Persons;
