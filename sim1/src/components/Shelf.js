//import ID 37E-1

import React, { Component } from 'react';
import '../App.css';
import routes from '../routes';
import {Link} from 'react-router-dom';

class Shelf extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
// ID 36G (JSX) 
    render(){
        return(
            <div className ="body">

                <h1>{this.props.match.params.class}</h1>

                <Link to = '/Bin/1'> <div className ="shelf"> Bin 1</div></Link>
              <Link to = '/Bin/2'>  <div className ="shelf"> Bin 2</div></Link>
               <Link to = '/Bin/3'> <div className ="shelf"> Bin 3</div></Link>
               <Link to = '/Bin/4'> <div className ="shelf"> Bin 4</div></Link>
            </div>
        )
    }
}

//export ID 37E-2 
export default Shelf;