import React, {Component} from 'react'
import Ionicon from 'react-ionicons'


class HeaderIcon extends Component {
  render () {
    return (
       <div className="nav-center">
        <a href="https://github.com/mortegac"><Ionicon icon="ion-social-github" fontSize="28px" color="#69707a"/> </a>
        <a href="https://twitter.com/manuelortega_c"><Ionicon icon="ion-social-twitter" fontSize="28px" color="#69707a"/></a>
          {
          // <Link to="https://github.com/mortegac" className="nav-item" target="_blank"> <Ionicon icon="ion-social-github" fontSize="28px" color="#69707a"/> </Link>
          // <Link to="https://twitter.com/manuelortega_c" className="nav-item" target="_blank"> <Ionicon icon="ion-social-twitter" fontSize="28px" color="#69707a"/> </Link>
          }
      </div>
    )
  }
}

export default HeaderIcon;
