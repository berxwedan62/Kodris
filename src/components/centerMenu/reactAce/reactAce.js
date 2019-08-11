import React, { Component } from 'react'
import ReactAce from "react-ace"
import "./reactAce.css"
import ProjectConsumer from "../../../context";
class reactAce extends Component{
    
    render(){
        return(
            <ProjectConsumer>
            {
                value => {
                    const {aceEditorValue} = value;
                    console.log(aceEditorValue);
                    return(
                        <div className="col-md-7 ace-div">
                            <ReactAce className="col-md-12 aceEditor ace" style={{height:"315px"}}
                                mode="java"
                                theme="github"
                                onChange={this.onChange}
                                name="UNIQUE_ID_OF_DIV"
                                value={aceEditorValue}
                                editorProps={{
                                    $blockScrolling: true
                                }}
                            />
                        </div>
                    )
                }
            }

            </ProjectConsumer>
            
        )
    }
}

export default reactAce;