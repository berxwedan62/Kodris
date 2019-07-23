//Sol Form Ana Component
import React, { Component } from 'react'
import  './leftMenu.css';
import Header from "../header/header"
import Content from "../content/content"
class leftMenu extends Component {
    render() {
        return (
            <div className="col-md-4">
                <Header/>
                <Content/>
            </div>
        )
    }
}
export default leftMenu;