
// Kodlar editör  ve console alanlarının ana componenti
import React, { Component } from 'react'
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
            <div className="col-md-12 row" >
                <div className="col-md-12" style={{borderStyle:"ridge",paddingLeft:0,paddingRight:0}}>
                    <div style={{backgroundColor:"black"}}>
                    {
                        isVisible?
                        <span onClick={this.onClickEvent.bind(this)} className="fas fa-caret-square-up"></span> :
                        <span onClick={this.onClickEvent.bind(this)} className="fas fa-caret-square-down"></span>
                    }
                    
                       <a href="javascript:void(0)" style={{backgroundColor:"black"}} class="au-target btn tip mode with-icon bottomMode console selected" au-target-id="131"><span class="title fa fa-terminal"></span> <span class="title au-target" t="ui.bottombar.console_button" au-target-id="132">Konsol</span> </a>
                       <a  href="javascript:void(0)" style={{backgroundColor:"black",width:"200px"}}  class="au-target btn tip mode with-icon bottomMode breakpoints" au-target-id="133"><span class="title fab fa-flickr"></span> <span class="title au-target" t="ui.bottombar.breakpoints_button" au-target-id="134">Kesim Noktaları</span> </a>
                
                    </div>
                    
                    {
                        isVisible?
                        <div>
                            dfgdf
                        </div>:null
                    }
                    
                </div>
            </div>
        )
    }
}
export default console;