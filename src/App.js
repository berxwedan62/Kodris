//Ana Component

import React from 'react';
import MainHeader from "./components/mainHeader/mainHeader"
import LeftMenu from "./components/leftMenu/main/leftMenu"
import CenterMenu from "./components/centerMenu/main/centerMenu"
import RightMenu from "./components/rightMenu/main/rightMenu"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends React.Component{
    
    render(){
        return(
            <div className="row" >
                    <MainHeader/>
                    <LeftMenu/>
                    <CenterMenu/>
                    <RightMenu/>
                
                {
                    /* 
                    <Router> 
                    <ul>
                        <li>
                            <Link to="/components/mainHeader/mainHeader">MainHeader</Link>
                        </li>
                        <li>
                            <Link to="/components/leftMenu/main/leftMenu">LeftMenu</Link>
                        </li>
                        <li>
                            <Link to="/components/centerMenu/main/centerMenu">CenterMenu</Link>
                        </li>
                    </ul>

                    <Route exact path="/components/mainHeader/mainHeader" component={MainHeader} />
                    <Route path="/components/leftMenu/main/leftMenu" component={LeftMenu} />
                    <Route path="/components/centerMenu/main/centerMenu" component={CenterMenu} />
                </Router>
                    */
                }
                
            </div>
        )
    }
}
export default App;