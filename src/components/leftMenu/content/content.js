//Sol Menü Görev açıklamalarının yapıldığı alan
import React, { Component } from 'react'
import "./content.css"
class content extends Component {
    render() {
        return (
            <div>
                <div className="col-md-12 left-menu-div">
                    <h2>Kodris Developer Proje Sihirbazı'na Hoş Geldin</h2>
                    <p>
                        Merhaba bugün Kodris Developer ile ilk uygulamamızı yapacağız. Yapacağımız uygulama basit bir konsol uygulaması olacak ve programlamaya yeni başlayan herkesin yaptığı ilk uygulama gibi bize Merhaba Dünya diyecek.
                    </p>
                    <p>
                    İlk uygulamamızın herhangi bir arayüzü olmayacak. Bu sebeple verdiği çıktıları konsoldan takip edeceğiz. Bu şekilde arayüzü olmayan uygulamalar konsol uygulaması olarak adlandırılır.
                    </p>
                    <p>
                    Python'da en temel metot olan print metotunu kulanarak başlayalım. print metotu verdiğimiz parametreyi konsola yazmak için kullanılır. Verdiğimiz parametre sadece metin değil herhangi bir nesne olabilir. Hepsinin kendine özel metin karşılıklarını konsoldan görmemize yarar.
                    </p>
                    <p>
                    print("Merhaba Dünya") kodunu ekleyerek başlayabilirsin. Ekledikten sonra kontrol etmek için DEVAM butonuna basıp devam edebilirsin.
                    </p>

                </div>
                <div className="current col-md-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-1">
                                <span className="au-target fa fa-arrow-right col-md-1" au-target-id="212"></span>
                            </div>
                            <div className="col-sm-8">
                                <span  className="col-sm-12 task" au-target-id="213"><code>print("Merhaba Dünya")</code> kodunu ekleyelim.</span>
                            </div>
                            <div className="col-sm-2">
                                <div className="col-md-2 check_button"  au-target-id="214">DEVAM</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="current col-md-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-1">
                                <span className="au-target fa fa-lock" au-target-id="212"></span>
                            </div>
                            <div className="col-sm-10">
                                <span  className="col-sm-12 task" au-target-id="213">	Çalıştır butonuna basıp uygulamamızı deneyelim.<br/>Uygulama çalıştığında konsoldaki "Merhaba Dünya" ifadesini görmelisin.</span>                         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default content;