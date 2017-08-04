import React, {Component} from 'react'
import Ionicon from 'react-ionicons'

class HeaderIcon extends Component {
  render () {
    return (
       <div className="nav-center">
            <a className="nav-item" href="https://github.com/mortegac" target="_blank"><Ionicon icon="ion-social-github" fontSize="28px" color="#69707a"/></a>
            <a className="nav-item" href="https://twitter.com/manuelortega_c" target="_blank"><Ionicon icon="ion-social-twitter" fontSize="28px" color="#69707a"/></a>
        </div>
    )
  }
}

export default HeaderIcon;
