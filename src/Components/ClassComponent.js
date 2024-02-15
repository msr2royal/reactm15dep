import React, { Component } from "react";

class ClassComponent extends Component{
    render(){
        return(
            <div>
                <h1>Class Component!</h1>
                <h1>State & Props in Class Component : {this.props.name}</h1>
            </div>
        );
    }
}
export default ClassComponent;