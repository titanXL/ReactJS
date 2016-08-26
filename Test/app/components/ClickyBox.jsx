import React from 'react';
import Clicky from './Clicky.jsx';

export default class ClickyBox extends React.Component {
    constructor(props){
        super(props)
        this.state={color:'green'}
    }
    
    render() {
        var divStyle = {
            color : this.state.color
        }
        return (
            <div className ="well"  >

                <div className="col-md-4">

                    <Clicky onClick={this.handleClick.bind(this)} style={divStyle}/>
                   
                </div>

            </div>
        )
    }
   handleClick(){
        var colors = ['red','blue','green','yellow','black']
        this.setState({
            color:colors[Math.floor((Math.random()*colors.length))]
        })
    }
}