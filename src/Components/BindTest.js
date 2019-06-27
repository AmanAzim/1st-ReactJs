import React, {Component} from 'react';
import Aux from "../Containers/App";
import css from '../Containers/App.css';
import RenderPropsDemo from '../RenderPopsDemo/RenderPropsDemo';
import '../index.css'

class BindTest extends Component {
    constructor(props) {
        super(props);
        //this.handleMouseOver = this.handleMouseOver.bind(this);
        //this.handleMouseOut= this.handleMouseOut.bind(this);
        this.state={
            img:'MouseOut',
            contents:['aman', 'tansen'],
            myClass:'red',
            test:'testConstructor',
            count_1:0,
            count_2:0
        };
        this.state.test='Mo';
        this.state.test=this.props.test;
        this.setState({test:'Noo'});
        console.log('From Constructor', this.state.test)
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
    componentDidMount() {
        this.setState({test:'from Component did mount img'});
    }

    onSetstateinLoop=()=>{
        for(var i=0;i<100;i++){
            this.setState({count_1:this.state.count_1+1})
        }
        for(let i=0;i<100;i++){
            this.setState((prevState)=>{
                return { count_2:prevState.count_2+1 }
            });
        }
    };
    showCount=()=>{
         setTimeout(()=>{console.log('count_1 aftetr saometime',this.state.count_1)},3000)
    };
    hoisting=()=>{
        var x=1;
        let g=5;
        let y=()=>{
            console.log('Hoisitng x=',x);
             x=2;
            console.log('Hoisitng1 g=',g);
            console.log('Hoisitng2 g=',g);
            g=6
            console.log('Hoisitng3 g=',g);
            //let g=7

        }
        y();
        console.log('Hoisitng4 g=',g);
        console.log('array/object concat',{a:1}+['a']);
    }

    render() {

        return (
            <div>
                <p>Test constructor img:{this.state.test} </p>
                <p>Test setState on loop, count_1:{this.state.count_1} && count_2:{this.state.count_2}</p>
                <button onClick={this.onSetstateinLoop}>ClickToRun-setState-in-loop</button>

                <button onClick={()=>{this.showCount(); this.hoisting();}}>Click to see count_1</button>
                {setTimeout(()=>console.log('img',this.state.test), 2000)}
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
                <hr/><br/>
                <hr/>
                <RenderPropsDemo/>
            </div>
        );
    }
}

export default BindTest;
