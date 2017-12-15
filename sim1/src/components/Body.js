import React, { Component } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
//state declared ID 36C
//constructor function ID 36I
class Body extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    // render function invoked and used ID 36F
    //link ID42E
    render(){
        return(
            <div className = "body" >
               <Link to = '/shelf/A'> <div className ="shelf"> Shelf A</div></Link>
              <Link to = '/shelf/B'>  <div className ="shelf"> Shelf B</div></Link>
               <Link to = '/shelf/C'> <div className ="shelf"> Shelf C</div></Link>
               <Link to = '/shelf/D'> <div className ="shelf"> Shelf D</div></Link>
            </div>
        )
    }
}

export default Body;