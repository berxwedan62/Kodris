//Orta Form Ana Component
import React, { Component } from 'react'
import  './centerMenu.css';
import Header from "../header/header"
import Content from "../content/content"
import "./centerMenu.css"
class centerMenu extends Component {
    render() {
        return (
            <div className="col-md-4 center-div" style={{minWidth:"610px"}}>
                <Header/>
                <Content/>
            </div>
        )
    }
}
export default centerMenu;