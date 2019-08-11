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
        debugger;
        return{
          ...state,
          aceEditorValue : action.payload
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
        dispatch: action =>{
          action.payload = this.state.aceEditorValue != ""? this.state.aceEditorValue +"\n"+ action.payload : action.payload ;
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