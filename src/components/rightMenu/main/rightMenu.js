
// Kodlar editör  ve console alanlarının ana componenti
import React, { Component } from 'react'
import Header from "../header/header"
import Content from "../content/content"
class rightMenu extends Component {
    render() {
        return (
            <div className="col-md-4">
                <Header/>
                <Content/>
            </div>
        )
    }
}
export default rightMenu;