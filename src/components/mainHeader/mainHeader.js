import React from 'react';
import  './mainHeader.css';
class MainHeader extends React.Component{
    render(){
        return(
            <div className="headerDiv">
                <img className="imageCube" src={require('../../images/cube.png')} alt=""/>
                <img className="imageText" src={require('../../images/text.png')} alt=""/>
            </div>
        )
    }
}
export default MainHeader;