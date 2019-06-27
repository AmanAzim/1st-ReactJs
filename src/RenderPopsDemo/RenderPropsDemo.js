import React, {Component} from 'react';
import BigBrother from './BigBrother';
import LittleSister from './LittleSister';

class RenderPropsDemo extends Component {
    /*A component with a render props takes a function instead of value as props and the function returns another Component.
     Then the component with the render props can call that function to render the passed (another) component. We can also pass the state of
     the Component with render prop's state as reference to that (another) component as props so that it also have access to the state of the
     component rendering it as a prop. In this way two component can also communicate with each other.
     */
    render() {
        return (
            <React.Fragment>
               <BigBrother render={(bigBrotherState)=>(
                                <React.Fragment>
                                    <LittleSister bgColor="pink" bigBrotherState={bigBrotherState}/>
                                </React.Fragment>  )} />
            </React.Fragment>
        );
    }
}

export default RenderPropsDemo;
