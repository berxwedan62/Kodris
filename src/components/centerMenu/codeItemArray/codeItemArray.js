// code componentini kapsayan bir list code componenti
import React, { Component } from 'react'
import Code from "../codeItem/codeItem"
import ProjectConsumer from "../../../context";

 class Codes extends Component {
    
    render() {
        return (
            <ProjectConsumer>
            {
                value => {
                    const {code} = value;
                    console.log(code);
                    return(
                        <div className="col-md-12">
                             {
                                code.map(code => {
                                   return(
                                    <Code
                                    key={code.id}
                                    code={code.codes}
                                    name={code.name}/>
                                    
                                   ) 
                                })
                            }
                        </div>
                    )
                    
                }
            }
        </ProjectConsumer>
        )
    }
}
export default Codes;