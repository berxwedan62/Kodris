//Orta Form Ana Component
import React, { Component } from 'react'
import  './centerMenu.css';
import Header from "../header/header"
import Content from "../content/content"
import "./centerMenu.css"
class centerMenu extends Component {
    render() {
        return (
            <div className="center-div">
                <Header/>
                <Content/>
            </div>
        )
    }
}
export default centerMenu;