import React, { Component } from 'react'
import ReactAce from "react-ace"
import 'brace/mode/javascript'
import "./reactAce.css"
import ProjectConsumer from "../../../context";
class reactAce extends Component{
    onChange = (dispatch,e) =>{
        dispatch({type:"ON_CHANGE_ACE_EDITOR",payload:e})
    }
    render(){
        
        return(
            <ProjectConsumer>
            {
                value => {
                    const {aceEditorValue,dispatch} = value;
                    console.log(aceEditorValue);
                    return(
                        <div className="col-md-7 ace-div">
                            <ReactAce className="col-md-12 aceEditor ace"
                                mode="java"
                                theme="github"
                                onChange={this.onChange.bind(this, dispatch)}
                                name="UNIQUE_ID_OF_DIV"
                                value={aceEditorValue}
                                editorProps={{
                                    $blockScrolling: true
                                }}
                                mode="javascript" 
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