import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Body from './components/Body';
import App from './App';
import Bin from './components/Bin';
import Shelf from './components/Shelf';


// ID 42F (Route) ID 42G (Switch)
export default (
    <Switch>
        <Route exact path ='/' component = { App } />
        <Route path ='/shelf/:class' component = { Shelf } />
        <Route path = '/bin/:id' component = { Bin } />
     </Switch>
)