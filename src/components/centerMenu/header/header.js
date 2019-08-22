// Orta Form Ana Başlık Faklı kaydet alanı
import React, { Component } from 'react'
import "./header.css"
class header extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 'Merhaba Dünya'};
    
        this.handleChange = this.handleChange.bind(this);
      }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    render() {
        return (
            <div className="mode-bar">
                <mode-bar class="au-target col-md-12" au-target-id="183">
                    <a title="Projelerime Dön" className="btn tip mode pull-left to-dashboard au-target"  au-target-id="33" href="#/"><i class="fas fa-arrow-left fontsize"></i></a>
                    <input type="text" className="pull-left" value={this.state.value} onChange={this.handleChange} name="projectName"></input> 
                    <a title="Projenize bir isim verin!" className="btn mode with-icon pull-left circle" href="javascript:void(0)"><i class="fas fa-pen fontsize"></i></a>
                    
                    <a className="btn tip mode au-target selected btn-tip-font" href="javascript:void(0)" id="mode-code" au-target-id="37"><span className="title au-target" t="ui.modebar.code_button" style={{fontSize:"13px",color:"White"}} au-target-id="38">KOD</span> </a>
                    <a className="btn tip mode au-target btn-tip-font"  href="javascript:void(0)"  id="mode-design" au-target-id="35"><span className="title au-target" t="ui.modebar.design_button" au-target-id="36"  style={{fontSize:"13px",color:"White"}}>TASARIM</span> </a>
                </mode-bar>
                <br/>
                <mode-bar class="au-target col-md-12 row" au-target-id="183">
                    <div className="modebar col-md-4" style={{marginBottom:"10px",width:"40%"}}>
                        <span className="title pull-left komut">KOMUTLAR</span><a style={{height:"24px"}}  class="btn pull-left tip mode with-icon left-icon leftClose au-target" href="javascript:void(0)" au-target-id="63" title="Gizle"><span className="fa fa-caret-left" style={{fontSize:"20px",color:"White"}}></span> </a><i class="fa fa-file-text-o"></i>
                    </div>

                    <div className=" col-md-4" style={{padding:"5px",width:"20%"}}>
                        <i class='far fa-file-alt' style={{fontSize:"24px",color:"#d7d7d8"}}> sayfa1</i>
                    </div>

                    <div className=" col-md-4" style={{width:"40%"}}>
                    <a style={{float:"right",fontWeight:"bold"}} className="btn tip  mode au-target selected"  href="javascript:void(0)"  au-target-id="39"><span className="title au-target" t="ui.modebar.export_button" style={{fontSize:"15px",color:"White"}} au-target-id="40">KAYDET</span> <i style={{fontSize:"16px",color:"White"}} class="far fa-share-square"></i></a>
                    </div>
                    
                </mode-bar>
                
            </div>
        )
    }
}
export default header;