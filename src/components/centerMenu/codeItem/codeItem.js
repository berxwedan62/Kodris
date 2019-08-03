// Genel Komutlar vb. kodların gösterildiği Component
import React, { Component } from 'react'
import "./codeItem.css"
// class componentlerde props işlemleri için this.props.attributename olarak erişilir.



 class Code extends Component {
     state = {
         isVisible:false
     }
     onClickEvent(e){
        const {isVisible} = this.state;
        isVisible?
        this.setState({
            isVisible:false
        }):
        this.setState({
            isVisible:true
        })
    }
    /*onClickEvent=(e)=>{
        console.log(this);  // burada this kullanmak undefine yazdırır. Çünkü bu this nereyi gösteriyor belli değil. Bu nedenle çağrılan yerde bind kullanılır. 22. satır
        console.log("test");
    }*/
    render() {
        const {name,code}= this.props; //İlk olarak liste eşleştirme yöntemi Destructuring
        console.log("Burası");
        console.log(code);
        const {isVisible} = this.state;

        
        return (
            
                <div className="card" >
                    <div className="card-header d-flex justify-context-between" style={{height:30,minWidth:100}} onClick={this.onClickEvent.bind(this)}>
                        <p style={{marginTop:-15}} className="d-inline">{name}</p>
                    </div>
                    {
                        isVisible?
                        <div className="card-body" style={{overflowY:"scroll",height:"20vh",paddingLeft:0}}>
                           <ul className="col-md-12" style={{height:20}}>
                                {code.map(codes=>
                                    <div>
                                        {codes}
                                    </div>
                                )}
                            </ul>
                        </div>:null
                    }
                    
                </div>
           
        )
    }
}
export default Code;