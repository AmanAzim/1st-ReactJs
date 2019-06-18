import React, {Component} from 'react';
import Aux from "../Containers/App";
import css from '../Containers/App.css';
import '../index.css'

class BindTest extends Component {
    constructor() {
        super();
        //this.handleMouseOver = this.handleMouseOver.bind(this);
        //this.handleMouseOut= this.handleMouseOut.bind(this);
        this.state={
            img:'MouseOut',
            contents:['aman', 'tansen'],
            myClass:'red',
        }
    }
    handleMouse=(event)=>{
        console.log(event.type)
        if(event.type==='mouseover'){
            this.setState({img:'MouseOver'})
        }
        if(event.type==='mouseout'){
            this.setState({img:'MouseOut'})
        }
    }
    //handleMouseOut=(event)=>{
       // console.log(event.type)
    //}


    render() {
        return (
            <div>
                <div  onMouseOver={(event)=>this.handleMouse(event.nativeEvent)} onMouseOut={(e)=>this.handleMouse(e.nativeEvent)}>Mouse event</div>
                <h1>{this.state.img}</h1>
                <hr/>
                <div>
                    {this.state.contents && this.state.contents.map(content=>{
                            return <p>{content}</p>
                        })
                    }
                </div>
                <div className={this.state.myClass}>
                    <h2>My class</h2>
                </div>
            </div>
        );
    }
}

export default BindTest;
