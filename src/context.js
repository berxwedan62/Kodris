import React, {Component} from "react"

const ProjectContext = React.createContext();
//Provider, Consumer

export class ProjectProvider extends React.Component{
    state = {
        Code:[
          {
            id:1,
            isim:"Genel Komutlar",
            codem:[
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
            isim:"Kontroller",
            codem:[
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
            isim:"Operatörler",
            codem:[
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