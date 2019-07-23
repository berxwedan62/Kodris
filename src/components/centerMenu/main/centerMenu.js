//Orta Form Ana Component
import React, { Component } from 'react'
import  './centerMenu.css';
import Header from "../header/header"
import Content from "../content/content"
class centerMenu extends Component {
    render() {
        const {code} = this.props;
        return (
            <div className="col-md-4">
                <Header/>
                <Content code={code}/>
            </div>
        )
    }
}
export default centerMenu;