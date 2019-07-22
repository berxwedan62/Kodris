import React from 'react';
import MainHeader from "./components/mainHeader/mainHeader"
import LeftMenu from "./components/leftMenu/leftMenu"
import CenterMenu from "./components/centerMenu/centerMenu"
class App extends React.Component{
    
    render(){
        return(
            <div className="col-md-12 row">
                <MainHeader/>
                <LeftMenu/>
                <CenterMenu/>
            </div>
        )
    }
}
export default App;