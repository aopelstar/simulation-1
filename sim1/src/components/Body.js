import React, { Component } from 'react';
import '../App.css'
//state declared ID 36C
//constructor function ID 36I
class Body extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    // render function invoked and used ID 36F
    render(){
        return(
            <div className = "body" >
                <div className ="shelf">Shelf A</div>
                <div className ="shelf">Shelf B</div>
                <div className ="shelf">Shelf C</div>
                <div className ="shelf">Shelf D</div>
            </div>
        )
    }
}

export default Body;