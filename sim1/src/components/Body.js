import React, { Component } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
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
               <Link to = '/shelf/shelfA'> <div className ="shelf"> Shelf A</div></Link>
              <Link to = '/shelf/shelfB'>  <div className ="shelf"> Shelf B</div></Link>
               <Link to = '/shelf/shelfC'> <div className ="shelf"> Shelf C</div></Link>
               <Link to = '/shelf/shelfD'> <div className ="shelf"> Shelf D</div></Link>
            </div>
        )
    }
}

export default Body;