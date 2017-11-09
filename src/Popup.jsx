import React, { Component } from 'react';

class Popup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showing: true
        }
    }
    hidePopup = () => {
        this.setState({
            showing: false
        })
    }

    render() {


        if (this.state.showing) {
            return [
                <div className="styles" key="1">
                    <div className="popupStyle" key="2">
                         <p>
                            NEW ALBUM ON SPOTIFY <strong>12/25/17</strong>.
                            </p>
                        <div className="thex" onClick={this.hidePopup} key="4">
                            X
                        </div>  
                             <video controls className="videoplay" autoPlay="true" muted={this.props.muted} key="3">
                                 {/*<source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4" />*/}
                                 <source src="./images/AWUDontKnow.mp4" type="video/mp4" />
                            </video>     
                    </div>
                </div>
            ];
        } else return null
    }
}


export default Popup;
