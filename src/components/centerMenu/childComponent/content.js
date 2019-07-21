import React, { Component } from 'react'
import Codes from "./contentChildComponent/codes"
import "./content.css"
class content extends Component {
    render() {
        const {code} = this.props;
        return (
            <div className="col-md-12 row">
                <div className="col-md-6"><Codes codes={code}/></div>
                <div className="col-md-6">adsda</div>
            </div>
        )
    }
}
export default content;