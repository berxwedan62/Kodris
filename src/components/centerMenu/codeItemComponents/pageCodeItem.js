// Genel Komutlar vb. kodların gösterildiği Component
import React, { Component } from 'react'
import BaseComponent from "./baseComponent"
// class componentlerde props işlemleri için this.props.attributename olarak erişilir.



 class pageCodeItem extends BaseComponent {
    constructor(props){
        super(props);
        this.setProperty(67,"page(......)","page",69);
      }

}
export default pageCodeItem;