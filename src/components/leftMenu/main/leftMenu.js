//Sol Form Ana Component
import React, { Component } from 'react'
import  './leftMenu.css';
import Header from "../header/header"
import Content from "../content/content"
import "./leftMenu.css"
class leftMenu extends Component {
    render() {
        return (
            <div className="col-md-4 left-div" style={{minWidth:"550px"}}>
                <Header/>
                <Content/>
            </div>
        )
    }
}
export default leftMenu;