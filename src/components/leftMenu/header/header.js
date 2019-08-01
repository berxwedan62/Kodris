//Sol Menü Başlık alanı Görev değiştime alanı
import React, { Component } from 'react'
import './header.css'
class header extends Component {
    render() {
        return (
            <div>
                <div className="leftMenuHeader col-md-12">
                    <div className="title col-md-12">Proje Sihirbazı</div>
                </div>
                <div className="taskDiv col-md-12">
                    <a href="true" title="Önceki Görev"><span className="fa fa-caret-left taskButton"></span> </a>
                    <a href="true" className="task" style={{verticalAlign:"sub"}}><span>Görev: Merhaba Dünya</span> </a>
                    <a href="true" title="Önceki Görev" ><span className="fa fa-caret-right taskButton"></span> </a>
                </div>
            </div>
        )
    }
}
export default header;