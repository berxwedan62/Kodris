
// Kodlar editör  ve console alanlarının ana componenti
import React, { Component } from 'react'
import Codes from "../codes/codes"
import ReactAce from "../reactAce/reactAce"
import Console from "../console/console"
class content extends Component {
    render() {
        return (
            <div className="col-md-12 row" >
                <div className="col-md-5" style={{borderStyle:"ridge"}}><Codes/></div>
                <ReactAce/>
                <Console/>
            </div>
        )
    }
}
export default content;