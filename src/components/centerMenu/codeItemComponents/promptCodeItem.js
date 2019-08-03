// Genel Komutlar vb. kodların gösterildiği Component
import React, { Component } from 'react'
import BaseComponent from "./baseComponent"
// class componentlerde props işlemleri için this.props.attributename olarak erişilir.



 class promptCodeItem extends BaseComponent {
    constructor(props){
        super(props);
        this.setProperty(67,"prompt(......)","prompt",69);
      }

}
export default promptCodeItem;