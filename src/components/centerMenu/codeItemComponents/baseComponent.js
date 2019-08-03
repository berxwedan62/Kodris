//Code kısmındaki itemler için oluşturulan base class. Bütün itemler bu sınıftan türer.
import React, { Component } from 'react'
import "../codeItem/codeItem.css"
class baseComponent extends React.Component{
    constructor(props){
      super(props);
    }
    
    setProperty(targetId,dataCode,helperTitle,helperTargetId){
        this.targetId = targetId;
        this.dataCode = dataCode;
        this.helperTitle=helperTitle;
        this.helperTargetId = helperTargetId;
    }

    onclickevent() {
        alert(this.dataCode);
    }

     render(){
       return (
           
               <li>
                    <span onClick={()=> this.onclickevent()} className="au-target col-md-9"  au-target-id={this.targetId} data-code={this.dataCode} style={{float:"left"}}>
                        {this.props.children} 
                    </span> 
                    <span style={{float:"right"}} className="fa fa-question tpd-hideOnClickOutside au-target" au-target-id={this.helperTargetId} title={this.helperTitle}></span>
                </li>
           
       )
     }
  }

  export default baseComponent