
// Kodlar editör  ve console alanlarının ana componenti
import React, { Component } from 'react'
import Codes from "../codes/codes"
import ReactAce from "../reactAce/reactAce"
import Console from "../console/console"
import "./content.css"
class content extends Component {
    render() {
        return (
            <div className=" container" >
                <div className="row">
                    <div className="col-md-5 content"><Codes/></div>
                    <ReactAce/>
                    <Console/>
                </div>
            </div>
        )
    }
}
export default content;