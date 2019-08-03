// Genel Komutlar vb. kodların gösterildiği Component
import React, { Component } from 'react'
import BaseComponent from "./baseComponent"
// class componentlerde props işlemleri için this.props.attributename olarak erişilir.



 class alertCodeItem extends BaseComponent {
    constructor(props){
        super(props);
        this.setProperty(67,'alert("...")',"alert",69);
      }

}
export default alertCodeItem;