import React, {Component} from 'react'
import Ionicon from 'react-ionicons'
import {Link} from 'react-router-dom';

class HeaderIcon extends Component {
  render () {
    return (
       <div className="nav-center">
          <Link to="https://github.com/mortegac" className="nav-item" target="_blank"> <Ionicon icon="ion-social-github" fontSize="28px" color="#69707a"/> </Link>
          <Link to="https://twitter.com/manuelortega_c" className="nav-item" target="_blank"> <Ionicon icon="ion-social-twitter" fontSize="28px" color="#69707a"/> </Link>
      </div>
    )
  }
}

export default HeaderIcon;
