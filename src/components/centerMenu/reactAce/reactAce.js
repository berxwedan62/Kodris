import React, { Component } from 'react'
import ReactAce from "react-ace-editor"

class reactAce extends Component{
    
    render(){
        return(
            <div className="col-md-7" style={{borderStyle:"ridge"}}>
                <ReactAce
                    mode="javascript"
                    theme="eclipse"
                    onChange={this.onChange}
                    style={{ height: '400px' }}
                    ref={instance => { this.ace = instance; }} // Let's put things into scope
                />

                </div>
        )
    }
}

export default reactAce;