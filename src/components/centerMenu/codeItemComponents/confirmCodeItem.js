// Genel Komutlar vb. kodların gösterildiği Component
import React, { Component } from 'react'
import BaseComponent from "./baseComponent"
// class componentlerde props işlemleri için this.props.attributename olarak erişilir.



 class confirmCodeItem extends BaseComponent {
    constructor(props){
        super(props);
        this.setProperty(67,"coonfirm(......)","coonfirm",69);
      }

}
export default confirmCodeItem;