
// Kodlar editör  ve console alanlarının ana componenti
import React, { Component } from 'react'
import "../header/header.css"
class header extends Component {
    render() {
        return (
            <div className="col-md-12 row header-div" style={{height:"5vh",marginLeft:"1px",minHeight:"50px"}} >
                <preview-bar className="au-target " au-target-id="184">
                    <a className="col-md-3 btn mode with-icon  circle pull-left start run-circle au-target " au-target-id="41">
                        <i class="fas fa-chevron-circle-right" style={{color:"green",fontSize:"19px"}}><span style={{color:"#333",fontSize:"23px",verticalAlign:"middle",backgroundColor:"#fff"}}>ÇALIŞTIR</span></i>
                    </a>
                    <a title="Devam..." className="col-md-1 btn mode with-icon pull-left merge-right continue au-target disabled" au-target-id="45">
                        <span className="title fas fa-play-circle fa-xs rigth-header-btn"></span>
                        <span className="title fas fa-angle-double-right fa-xs rigth-header-btn"></span>
                    </a>
                    <a title="Tam Ekran Olarak Görüntüle"  className="col-md-1 right-side au-target btn mode with-icon fullscreen disabled" au-target-id="56">
                        <span className="title fas fa-expand fa-xs rigth-header-btn"></span>
                    </a>
                    <a title="Masaüstü Olarak Görüntüle"  className="col-md-1 right-side au-target btn mode with-icon merge-left preview-mode pc selected" au-target-id="55">
                        <span className="title fas fa-desktop fa-xs rigth-header-btn"></span>
                    </a>
                    <a title="Tablet Olarak Görüntüle"  className="col-md-1 right-side  au-target btn mode with-icon merge-between preview-mode tablet" au-target-id="54">
                        <span className="title fa fa-tablet fa-xs rigth-header-btn"></span>
                    </a>
                    <a title="Mobil Olarak Görüntüle"  className="col-md-1 right-side  au-target btn mode with-icon merge-right preview-mode mobile" au-target-id="53">
                        <span className="title fa fa-mobile fa-xs rigth-header-btn"></span>
                    </a>
                    <a title="Sayfalar" className="col-md-2 right-side  au-target btn mode pages" au-target-id="48">
                        <span className="title rigth-header-btn">sayfa1</span>
                        <span className="title fa fa-caret-down fa-xs rigth-header-btn"></span>
                    </a>
                    <a title="Sayfa Ekle..." className="col-md-1 right-side  btn mode with-icon add-page au-target"  au-target-id="47">
                        <span className="title fa fa-plus fa-xs rigth-header-btn"></span>
                    </a>
                </preview-bar>
            </div>
        )
    }
}
export default header;