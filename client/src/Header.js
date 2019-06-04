import React, { Component } from 'react';
import './css/App.css';
import Nav from './components/Nav';
import './css/bootstrap.min.css';




class Header  extends  Component{
    render(){
        return(
            <Nav/>
        );
    }
}

export default Header;