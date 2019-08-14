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
                <div className="exercise-bar col-md-12 row ">
                    <a  href="true" title="Önceki Görev" className="task-button margin"><span className="fa fa-caret-left"></span> </a>
                    <a href="true" className="task1 task-button"><span>Görev: Merhaba Dünya</span> </a>
                    <a href="true" title="Önceki Görev" className="task-button" ><span className="fa fa-caret-right"></span> </a>
                </div>
            </div>
        )
    }
}
export default header;