import React, {Component} from 'react';

class LittleSister extends Component {
    render() {

        const bigBroState=this.props.bigBrotherState;//It is the reference of Bigbrother's state. By using it we are able to access "switch" property of Bigbrother's state.

        return (
            <div>
                <h3>Litter sister wants to play with  {bigBroState.switch? 'Gun':'Girls'}</h3>
            </div>
        );
    }
}

export default LittleSister;
