// Orta Form Ana Başlık Faklı kaydet alanı
import React, { Component } from 'react'
import "./header.css"
class header extends Component {
    render() {
        return (
            <div className="mode-bar">
                <mode-bar class="au-target col-md-12" au-target-id="183">
                    <a title="Projelerime Dön" className="btn tip mode pull-left to-dashboard au-target"  au-target-id="33" href="#/"><span className="title icon fas fa-arrow-circle-left"></span> </a>
                    <input type="text" onChange={this._onChangeHandler} className="pull-left" value="Merhaba Dünya"></input> 
                    <a title="Projenize bir isim verin!" className="btn mode with-icon pull-left circle" href="javascript:void(0)"><span  className="title fa fa-edit"></span> </a>
                    <a className="btn tip mode au-target"  href="javascript:void(0)"  id="mode-design" au-target-id="35"><span className="title au-target" t="ui.modebar.design_button" au-target-id="36">TASARIM</span> </a>
                    <a className="btn tip mode au-target selected" href="javascript:void(0)" id="mode-code" au-target-id="37"><span className="title au-target" t="ui.modebar.code_button" au-target-id="38">KOD</span> </a>
                 </mode-bar>
                <br/>
                <mode-bar class="au-target col-md-12" au-target-id="183">
                    <div className="modebar">
                        <span className="title pull-left">KOMUTLAR</span><a class="btn tip mode with-icon pull-left  left-icon leftClose au-target" href="javascript:void(0)" au-target-id="63" title="Gizle"><span className="fa fa-caret-left"></span> </a><i class="fa fa-file-text-o"></i>sayfa1
                        <a className="btn tip pull-right mode au-target selected"  href="javascript:void(0)"  au-target-id="39"><span className="title au-target" t="ui.modebar.export_button" au-target-id="40">FARKLI KAYDET</span> <span className="title icon icon-share"></span></a>
                    </div>
                    
                </mode-bar>
                
            </div>
        )
    }
}
export default header;