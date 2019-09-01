//Ana Başlık Kodris yazan alan
import React from 'react';
import  './mainHeader.css';
class MainHeader extends React.Component{
    render(){
        return(
            <div className="headerDiv">
                <img className="imageCube" src={require('../../images/cube.png')}/>
                <img className="imageText" src={require('../../images/text.png')}/>
            </div>
        )
    }
}
export default MainHeader;