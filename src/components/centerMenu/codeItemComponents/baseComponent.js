//Code kısmındaki itemler için oluşturulan base class. Bütün itemler bu sınıftan türer.
import React, { Component } from 'react'
import "../codeItem/codeItem.css"
import ProjectConsumer from "../../../context";
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

    onclickevent = (dispatch,e) => {
        dispatch({type:"ON_CLICK_CODE_BUTTON",payload:this.dataCode})
    }

     render(){
        return (
          <ProjectConsumer>
          {
              value => {
                  const {dispatch,isCodeItemClicked} = value;
                  console.log(isCodeItemClicked);
                  return(
                    <li>
                        <span onClick={this.onclickevent.bind(this,dispatch)} className="au-target col-md-9"  au-target-id={this.targetId} data-code={this.dataCode} style={{float:"left"}}>
                              {this.props.children} 
                          </span> 
                          <span style={{float:"right"}} className="fa fa-question tpd-hideOnClickOutside au-target" au-target-id={this.helperTargetId} title={this.helperTitle}></span>
                    </li>
                  )
              }
          }
          </ProjectConsumer>
          
        )
     }
  }

  export default baseComponent