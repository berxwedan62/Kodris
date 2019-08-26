
// Kodlar editör  ve console alanlarının ana componenti
import React, { Component } from 'react'
import "./content.css"
import ProjectConsumer from "../../../context";
class content extends Component {
    render() {
        return (
            <ProjectConsumer>
            {
                value => {
                    const {deviceTool} = value;
                    return(
                        <div>
                            {
                                deviceTool == "desktop"?
                                <div id="denemee" className="col-md-12 background-device">
                                        MERHABA DÜNYA KONSOL UYGULAMASI
                                </div>
                                :
                                deviceTool == "mobile"?
                                <div id="denemee" className="col-md-12 row background-device">
                                    <div class="smartphone">
                                        <div class="content">
                                            MERHABA DÜNYA KONSOL UYGULAMASI
                                        </div>
                                    </div>
                                    
                                </div>
                                :
                                <div id="denemee" className="col-md-12 row background-device">
                                    <div class="tablet">
                                        <div class="content">
                                            MERHABA DÜNYA KONSOL UYGULAMASI
                                        </div>
                                    </div>
                                    
                                </div>
                            }
                        </div>
                            
                        
                    )
                }
            }

            </ProjectConsumer>



            
        )
    }
}
export default content;