import React, {Component} from "react"
import PrintCodeItem from "./components/centerMenu/codeItemComponents/printCodeItem"
import AlertCodeItem from "./components/centerMenu/codeItemComponents/alertCodeItem"
import ConfirmCodeItem from "./components/centerMenu/codeItemComponents/confirmCodeItem"
import PromptCodeItem from "./components/centerMenu/codeItemComponents/promptCodeItem"
import PageCodeItem from "./components/centerMenu/codeItemComponents/pageCodeItem"
import PagesCodeItem from "./components/centerMenu/codeItemComponents/pagesCodeItem"

const ProjectContext = React.createContext();
//Provider, Consumer

const reducer = (state,action) =>{
    switch(action.type){
      case "ON_CLICK_CODE_BUTTON":
        return{
          ...state,
          aceEditorValue : action.payload,
          isCodeItemClicked:true,
          isCodeItemDragged:false
        }
      case "ON_DRAG_CODE_BUTTON":
        return{
          ...state,
          aceEditorValue : action.payload,
          isCodeItemClicked:false,
          isCodeItemDragged:true
        }
      case "ON_CLICK_DEVICE_TOOL_BUTTON":
          return{
            ...state,
            deviceTool : action.payload
          }
      case "ON_CHANGE_ACE_EDITOR":
        return{
          ...state,
          aceEditorValue : action.payload
        }
      case "ON_CODE_COMPONENT":
        return{
          ...state,
          code : action.payload
        }
      default:
        return state;
    }

}

export class ProjectProvider extends React.Component{
    state = {
        code:[
          {
            id:1,
            name:"Genel Komutlar",
            codes:[
                <PrintCodeItem>Print</PrintCodeItem>,
                <AlertCodeItem>Alert</AlertCodeItem>,
                <ConfirmCodeItem>Confirm</ConfirmCodeItem>,
                <PromptCodeItem>Prompt</PromptCodeItem>,
                <PageCodeItem>Page</PageCodeItem>,
                <PagesCodeItem>Pages</PagesCodeItem>
            ]
          },
          {
            id:2,
            name:"Kontroller",
            codes:[
                "if",
                "if..else",
                "if..elif",
                "repeat",
                "for",
                "while",
                "while not",
                "function",
                "variable",
                "True",
                "False"
            ]
          },
          {
            id:3,
            name:"Operatörler",
            codes:[
                "and",
                "or",
                "not",
                "in",
                "not in",
                "is",
                "is not",
                "+",
                "-",
                "*",
                "/",
                "%",
                "**",
                "//",
                "==",
                "!=",
                ">",
                "<",
                ">=",
                "<=",
                "=",
                "+=",
                "-=",
                "*=",
                "/=",
                "%=",
                "//="

            ]
          }
        ],
        aceEditorValue:"",
        isCodeItemClicked :false,
        isCodeItemDragged :false,
        deviceTool:"desktop",
        dispatch: action =>{
          debugger;
          if(action.type == "ON_CLICK_CODE_BUTTON")
            action.payload = this.state.aceEditorValue != ""? this.state.aceEditorValue +"\n"+ action.payload : action.payload ;
          else if(action.type == "ON_DRAG_CODE_BUTTON")     
          action.payload = this.state.aceEditorValue != ""? this.state.aceEditorValue +"\n"+ action.payload : action.payload ; 
          else if(action.type == "ON_CHANGE_ACE_EDITOR")     
            action.payload = action.payload ;    
          else if(action.type == "ON_CODE_COMPONENT")     
            action.payload = action.payload ;   
          else 
            action.payload = action.payload ;
            this.setState(state => reducer(state,action))
        }
      }
    render(){
        return(
            <ProjectContext.Provider value={this.state}>
                {this.props.children}
            </ProjectContext.Provider>
        )
    }
}

const ProjectConsumer = ProjectContext.Consumer;

export default ProjectConsumer;