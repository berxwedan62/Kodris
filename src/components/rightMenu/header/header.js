
// Kodlar editör  ve console alanlarının ana componenti
import React, { Component } from 'react'
import "../header/header.css"
class header extends Component {
    render() {
        return (
            <div className="col-md-12 row " >
                <preview-bar className="au-target " au-target-id="184">
                    <a className="col-md-1 btn mode with-icon  circle pull-left start run-circle au-target " au-target-id="41">
                        <span className="fa fa-chevron-circle-right fa-xs rigth-header-btn"></span>
                    </a>
                    <a className="col-md-2 btn mode pull-left run au-target"  au-target-id="42">
                        <span className="title au-target rigth-header-btn"  au-target-id="43">ÇALIŞTIR</span>
                    </a>
                    <a title="Devam..." className="col-md-1 btn mode with-icon pull-left merge-right continue au-target disabled" au-target-id="45">
                        <span className="title fas fa-play-circle fa-xs rigth-header-btn"></span>
                    </a>
                    <a title="Adım..." className="col-md-1 btn mode with-icon pull-left merge-left step au-target disabled" au-target-id="46">
                        <span className="title fas fa-angle-double-right fa-xs rigth-header-btn"></span>
                    </a>
                    <a title="Sayfa Ekle..." className="col-md-1 btn mode with-icon add-page au-target"  au-target-id="47">
                        <span className="title fa fa-plus fa-xs rigth-header-btn"></span>
                    </a>
                    <a title="Sayfalar" className="col-md-2 au-target btn mode pages" au-target-id="48">
                        <span className="title rigth-header-btn">sayfa1</span>
                        <span className="title fa fa-caret-down fa-xs rigth-header-btn"></span>
                    </a>
                    <a title="Mobil Olarak Görüntüle"  className="col-md-1 au-target btn mode with-icon merge-right preview-mode mobile" au-target-id="53">
                        <span className="title fa fa-mobile fa-xs rigth-header-btn"></span>
                    </a>
                    <a title="Tablet Olarak Görüntüle"  className="col-md-1 au-target btn mode with-icon merge-between preview-mode tablet" au-target-id="54">
                        <span className="title fa fa-tablet fa-xs rigth-header-btn"></span>
                    </a>
                    <a title="Masaüstü Olarak Görüntüle"  className="col-md-1 au-target btn mode with-icon merge-left preview-mode pc selected" au-target-id="55">
                        <span className="title fas fa-desktop fa-xs rigth-header-btn"></span>
                    </a>
                    <a title="Tam Ekran Olarak Görüntüle"  className="col-md-1 au-target btn mode with-icon fullscreen disabled" au-target-id="56">
                        <span className="title fas fa-expand fa-xs rigth-header-btn"></span>
                    </a>
                </preview-bar>
            </div>
        )
    }
}
export default header;