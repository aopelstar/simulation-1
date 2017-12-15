import React, { Component } from 'react';
import Logo from '../assets/logo.png';
import '../App.css'

function Head(){
    return(
        <div>
            <header className="main-header">
            <div className="image">
                <img src= {Logo} /> 
                SHELFIE
            </div>
                

            </header>
         </div>
    )
}


export default Head;