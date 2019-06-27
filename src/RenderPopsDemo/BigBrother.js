import React, {Component} from 'react';

class BigBrother extends Component {
    state={
        switch:false
    }

    render() {
        return (
            <div>
                <h3>Big brother is playing with {this.state.switch? 'Gun':'Girls'}</h3>
                <button onClick={()=>this.setState({switch:!this.state.switch})}>Control Big brother</button>
                {this.props.render && this.props.render(this.state) }
            </div>
        );
    }
}

export default BigBrother;
