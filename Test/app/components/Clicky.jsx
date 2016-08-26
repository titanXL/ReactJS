import React from 'react';

export default class Clicky extends React.Component{
   
    render(){
         
        return(
            <div className="well" >
            <div className="row">
                <div className="col-md-4" onClick ={this.props.onClick}  style={this.props.style}>CLICKY!!!</div>
            </div>
            </div>
        )
    }
     
    
}