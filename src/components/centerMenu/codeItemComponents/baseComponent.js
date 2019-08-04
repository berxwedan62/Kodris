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
      var isDefienAceIdentifier = document.getElementsByClassName('ace_identifier')[0];
      debugger;
      if (!isDefienAceIdentifier)
        document.getElementsByClassName('ace_line')[0].innerHTML="<span class=\"ace_identifier\"></span>";

      document.getElementsByClassName('ace_identifier')[0].innerText += this.dataCode ;      
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