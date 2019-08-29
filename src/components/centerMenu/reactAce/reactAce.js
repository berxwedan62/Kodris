import React, { Component } from 'react'
import {Droppable } from 'react-simple-drag-n-drop'
import codeComponent from '../codeItemArray/codeItemArray'
import ReactAce from "react-ace"
import 'brace/mode/javascript'
import "./reactAce.css"
import ProjectConsumer from "../../../context";
class reactAce extends Component{
    onChange = (dispatch,e) =>{
        dispatch({type:"ON_CHANGE_ACE_EDITOR",payload:e})
    }

    onDragevent = (dispatch,e) => {
        dispatch({type:"ON_DRAG_CODE_BUTTON",payload:window.dataCode})
    }
    render(){
        
        return(
            <ProjectConsumer>
            {
                value => {
                    const {aceEditorValue,dispatch,code} = value;
                    window.code = code;
                    console.log(aceEditorValue);
                    return(
                        <div className="col-md-7 ace-div">
                            <Droppable isDragAndDropElement={false} onDropCallback={this.onDragevent.bind(this, dispatch)} >
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
                            </Droppable>
                        </div>
                    )
                }
            }

            </ProjectConsumer>
            
        )
    }
}

export default reactAce;