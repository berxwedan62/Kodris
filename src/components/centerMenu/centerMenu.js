import React, { Component } from 'react'
import  './centerMenu.css';
import Header from "./childComponent/header"
import Content from "./childComponent/content"
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