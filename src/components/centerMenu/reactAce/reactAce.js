import React, { Component } from 'react'
import ReactAce from "react-ace"

class reactAce extends Component{
    
    render(){
        return(
            <div className="col-md-7" style={{borderStyle:"ridge"}}>
                <ReactAce
                    mode="java"
                    theme="github"
                    onChange={this.onChange}
                    name="UNIQUE_ID_OF_DIV"
                    value="dsfsdfsd"
                    editorProps={{
                        $blockScrolling: true
                    }}
                />
            </div>
        )
    }
}

export default reactAce;