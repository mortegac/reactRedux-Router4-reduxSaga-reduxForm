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
                            <a href="https://github.com/mortegac"><Ionicon icon="ion-social-github" fontSize="28px" color="#69707a"/> </a>
                            <a href="https://twitter.com/manuelortega_c"><Ionicon icon="ion-social-twitter" fontSize="28px" color="#69707a"/></a>
         
                            </div>
                    </div>
                

                </div>
            </div>
        </footer> 
    )
  }
}

export default Footer;
