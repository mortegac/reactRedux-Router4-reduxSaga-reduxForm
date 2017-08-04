import React, {Component} from 'react';
import Ionicon from 'react-ionicons'

class Footer extends Component {
  render () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                    <p>Desarrollado por:<strong> Manuel Ortega Carcamo @2017</strong></p>
                   
                        <div id="social">
                            <div className="nav-center">
                                <a className="nav-item" href="https://github.com/mortegac" target="_blank"><Ionicon icon="ion-social-github" fontSize="28px" color="#69707a"/></a>
                                <a className="nav-item" href="https://twitter.com/manuelortega_c" target="_blank"><Ionicon icon="ion-social-twitter" fontSize="28px" color="#69707a"/></a>
                            </div>
                    </div>
                

                </div>
            </div>
        </footer> 
    )
  }
}

export default Footer;
