import React, {Component} from 'react';
import logo from './images/logo-providencia-blanco.png'

class HeaderLogo extends Component {
  render () {
    return (
        <div className="nav-left">
            <a className="nav-item is-brand" href="/"><img src={logo} alt="Municipalidad de Providencia"/></a>
        </div>
    )
  }
}

export default HeaderLogo;
