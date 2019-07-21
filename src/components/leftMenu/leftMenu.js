import React, { Component } from 'react'
import  './leftMenu.css';
import Header from "./childComponent/header"
import Content from "./childComponent/content"
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