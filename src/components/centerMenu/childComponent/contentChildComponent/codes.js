import React, { Component } from 'react'
import Codee from "./code"
import ProjectConsumer from "../../../../context";

 class Codes extends Component {
    
    render() {
        return (
            <ProjectConsumer>
            {
                value => {
                    const {Code} = value;
                    console.log(Code);
                    return(
                        <div>
                             {
                                Code.map(code => {
                                   return(
                                    <Codee
                                    key={code.id}
                                    code={code.codem}
                                    isim={code.isim}/>
                                    
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