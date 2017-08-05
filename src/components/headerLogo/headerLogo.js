import React, {Component} from 'react'
import logo from './images/logo.svg'
import '../../App.css'

class HeaderLogo extends Component {
  render () {
    return (
        <div className="nav-left">
            <a className="nav-item is-brand" href="/">
              <img src={logo} className="App-logo" alt="logo" style={{ maxHeight: '31px'}}/>
            </a>
        </div>
    )
  }
}

export default HeaderLogo;
