import React, {Component} from "react"

const ProjectContext = React.createContext();
//Provider, Consumer

export class ProjectProvider extends React.Component{
    state = {
        code:[
          {
            id:1,
            name:"Genel Komutlar",
            codes:[
                "print",
                "alert",
                "confirm",
                "prompt",
                "page",
                "pages",
                "openpage",
                "abs",
                "all",
                "any",
                "bin",
                "cmp",
                "chr",
                "filter",
                "hex",
                "in",
                "iterable",
                "len",
                "map",
                "max",
                "min",
                "mixin",
                "range",
                "reduce",
                "reversed",
                "sorted",
                "sum",
                "zip",
                "getattr",
                "setattr",
                "hasattr",
                "eq"
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
        ]
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