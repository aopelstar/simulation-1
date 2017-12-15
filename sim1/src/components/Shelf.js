//import ID 37E-1

import React, { Component } from 'react';
import '../App.css'

class Shelf extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h1>{this.props.match.params.class}</h1>
                <h2></h2>
            </div>
        )
    }
}

//export ID 37E-2 
export default Shelf;