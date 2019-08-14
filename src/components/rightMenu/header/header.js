
// Kodlar editör  ve console alanlarının ana componenti
import React, { Component } from 'react'
import "./header.css"
import ProjectConsumer from "../../../context";
class header extends Component {
    constructor(props){
        super(props);
      }

    onclickFullScreen = (e)=>{
        debugger;
        const elem = document.getElementById('denemee');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
          } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
          } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
          }
    }

    onclickDeviceToolButtons = (dispatch,e)=>{
        debugger;
        if(e.target.classList.contains("fa-desktop"))
            dispatch({type:"ON_CLICK_DEVICE_TOOL_BUTTON",payload:"desktop"})
        else if(e.target.classList.contains("fa-tablet"))
            dispatch({type:"ON_CLICK_DEVICE_TOOL_BUTTON",payload:"tablet"})
        else if(e.target.classList.contains("fa-mobile"))
            dispatch({type:"ON_CLICK_DEVICE_TOOL_BUTTON",payload:"mobile"});
    }
    render() {
        
        return (
            <ProjectConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return(
                        <div className="container-fluid">
                            <div className="row header-div" style={{minHeight:"auto"}}>
                                    <div className="col-md-3 col-sm-3">
                                        <a className="btn mode with-icon  circle left-side start run-circle au-target " au-target-id="41">
                                            <i class="fas fa-chevron-circle-right run-button"><span className="run-button-text">ÇALIŞTIR</span></i>
                                        </a>
                                    </div>
                                    <div className="col-md-9 col-sm-9" >
                                    <a title="Tam Ekran Olarak Görüntüle" onClick={this.onclickFullScreen.bind(this)}  className="col-md-1 col-sm-1 right-side au-target" au-target-id="56">
                                        <span className="title fas fa-expand fa-xs rigth-header-btn"></span>
                                    </a>
                                    <a title="Masaüstü Olarak Görüntüle" onClick={this.onclickDeviceToolButtons.bind(this,dispatch)} className="col-md-1 col-sm-1 beetwen-component right-side au-target " au-target-id="55">
                                        <span className="title fas fa-desktop fa-xs rigth-header-btn"></span>
                                    </a>
                                    <a title="Tablet Olarak Görüntüle" onClick={this.onclickDeviceToolButtons.bind(this,dispatch)} className="col-md-1 col-sm-1 beetwen-component right-side  au-target" au-target-id="54">
                                        <span className="title fa fa-tablet fa-xs rigth-header-btn black"></span>
                                    </a>
                                    <a title="Mobil Olarak Görüntüle" onClick={this.onclickDeviceToolButtons.bind(this,dispatch)}  className="col-md-1 col-sm-1 right-side  au-target" au-target-id="53">
                                        <span className="title fa fa-mobile fa-xs rigth-header-btn black"></span>
                                    </a>
                                    <a title="Sayfalar" className="col-md-3 col-sm-2 right-side   au-target" au-target-id="48">
                                        <span className="title rigth-header-btn">sayfa1</span>
                                        <span className="title fa fa-caret-down fa-xs rigth-header-btn black"></span>
                                    </a>
                                    <a title="Sayfa Ekle..." className="col-md-1 col-sm-1 right-side au-target"  au-target-id="47">
                                        <span className="title fa fa-plus fa-xs rigth-header-btn black"></span>
                                    </a>
                                    <a title="Devam..." className="col-md-1 col-sm-1 beetwen-component right-side merge-right au-target " au-target-id="45">
                                        <span className="title fas fa-angle-double-right fa-xs rigth-header-btn"></span>
                                    </a>
                                    <a title="Devam..." className="col-md-1  col-sm-1 right-side au-target" au-target-id="45">
                                        <span className="title fas fa-play-circle fa-xs rigth-header-btn"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
            </ProjectConsumer>
        )
    }
}
export default header;