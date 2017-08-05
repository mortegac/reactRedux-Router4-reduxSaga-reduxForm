import React, {Component} from 'react';
import Ionicon from 'react-ionicons'
import {Link} from 'react-router-dom';

class Footer extends Component {
  render () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                    <p>Desarrollado por:<strong> Manuel Ortega Carcamo @2017</strong></p>
                   
                        <div id="social">
                            <div className="nav-center">
                            <Link to="https://github.com/mortegac" className="nav-item" target="_blank"> <Ionicon icon="ion-social-github" fontSize="28px" color="#69707a"/> </Link>
                            <Link to="https://twitter.com/manuelortega_c" className="nav-item" target="_blank"> <Ionicon icon="ion-social-twitter" fontSize="28px" color="#69707a"/> </Link>
    
                            </div>
                    </div>
                

                </div>
            </div>
        </footer> 
    )
  }
}

export default Footer;
