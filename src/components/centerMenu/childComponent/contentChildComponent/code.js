import React, { Component } from 'react'
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
        const {isim,code}= this.props; //İlk olarak liste eşleştirme yöntemi Destructuring
        console.log(code);
        const {isVisible} = this.state;
        return (
            <div className="col-md-12">
                <div className="card" >
                    <div className="card-header d-flex justify-context-between" style={{height:30}} onClick={this.onClickEvent.bind(this)}>
                        <p style={{marginTop:-15}} className="d-inline">{isim}</p>
                    </div>
                    {
                        isVisible?
                        <div className="card-body">
                            {code.map(codes=>
                                <p style={{marginTop:-20}} className="card-text">{codes}</p>
                            )}
                        </div>:null
                    }
                    
                </div>
            </div>
        )
    }
}
export default Code;