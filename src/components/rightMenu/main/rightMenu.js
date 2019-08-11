
// Kodlar editör  ve console alanlarının ana componenti
import React, { Component } from 'react'
import Header from "../header/header"
import Content from "../content/content"
import "./rightMenu.css"
class rightMenu extends Component {
    render() {
        return (
            <div className="right-div">
                <Header/>
                <Content/>
            </div>
        )
    }
}
export default rightMenu;