import React from 'react';
import MainHeader from "./components/mainHeader/mainHeader"
import LeftMenu from "./components/leftMenu/leftMenu"
import CenterMenu from "./components/centerMenu/centerMenu"
class App extends React.Component{
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
            isim:"Derya Taşdemir"
          },
          {
            id:3,
            isim:"Zeki Taşdemir"
          }
        ]
      }
    render(){
        return(
            <div className="col-md-12 row">
                <MainHeader/>
                <LeftMenu/>
                <CenterMenu code={this.state.Code}/>
            </div>
        )
    }
}
export default App;