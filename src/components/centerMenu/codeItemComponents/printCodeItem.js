// Genel Komutlar vb. kodların gösterildiği Component
import React, { Component } from 'react'
import BaseComponent from "./baseComponent"
// class componentlerde props işlemleri için this.props.attributename olarak erişilir.



 class printCodeItem extends BaseComponent {
    constructor(props){
        super(props);
        this.setProperty(67,"print(......)","print",69);
      }

}
export default printCodeItem;