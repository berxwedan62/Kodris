
// Kodlar editör  ve console alanlarının ana componenti
import React, { Component } from 'react'
import "./console.css"
class console extends Component {
    state = {
        isVisible:false
    }
    onClickEvent(e){
       const {isVisible} = this.state;
       isVisible?
       this.setState({
           isVisible:false
       }):
       this.setState({
           isVisible:true
       })
   }
    render() {
        const {isVisible} = this.state;
        return (
            <div className="container-fluid console-title">
                <div className="row">
                    <div className="col-md-1 col-sm-1">
                        {
                            isVisible?
                            <span onClick={this.onClickEvent.bind(this)} className="fas fa-caret-square-up" style={{fontSize:"30px",color:"white"}}></span> :
                            <span onClick={this.onClickEvent.bind(this)} className="fas fa-caret-square-down" style={{fontSize:"30px",color:"white"}}></span>
                        }
                    </div>
                    
                    <div className="col-md-3 col-sm-3" style={{bottom:"15px",backgroundColor:"transparent"}}>
                         <a href="javascript:void(0)" style={{backgroundColor:"transparent"}} class="console-title-button1  au-target btn tip mode with-icon bottomMode console selected" au-target-id="131"><span style={{fontSize:"15px",color:"white"}} class="title fa fa-terminal"></span> <span class="title au-target" t="ui.bottombar.console_button" style={{fontSize:"17px",color:"white"}} au-target-id="132">Konsol</span> </a>
                     
                    </div >
                    <div className="col-md-6 col-sm-6" style={{bottom:"15px",backgroundColor:"transparent"}}>
                    <a  href="javascript:void(0)" style={{backgroundColor:"transparent",width:"auto"}}  class="console-title-button2 col-md-12 col-sm-12 au-target btn tip mode with-icon bottomMode breakpoints" au-target-id="133"><span style={{fontSize:"15px",color:"white"}} class="title fab fa-flickr"></span> <span class="title au-target" t="ui.bottombar.breakpoints_button" au-target-id="134" style={{fontSize:"17px",color:"white"}}>Kesim Noktaları</span> </a>
                
                    </div >
                       
                    </div>
                   
                    
                    {
                        isVisible?
                        <div className="col-md-12 console-div console-content">
                                sadas
                        <div>
                            
                        </div></div>:null
                    }
                    
                
            </div>
        )
    }
}
export default console;