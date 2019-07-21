import React, { Component } from 'react'
import Code from "./code"

 class Codes extends Component {
    
    render() {
        const {codes} = this.props;  
        return (
            <div>
               {codes.map(codes=>
                    <Code
                        key={codes.id}
                        code={codes.codem}
                        isim={codes.isim}/>
               )}  
            </div>
        )
    }
}
export default Codes;