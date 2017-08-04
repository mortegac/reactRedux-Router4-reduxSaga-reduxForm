import React, {Component} from 'react';

import HeaderLogo from '../../components/headerLogo/headerLogo'
import HeaderIcon from '../../components/headerIcon'
import HeaderMenu from '../../components/headerMenu'


class HeaderNav extends Component {
  render () {
    return (
        <div className="hero-head">
            <div className="container">
            <nav className="nav">

                <HeaderLogo></HeaderLogo>
                <HeaderMenu></HeaderMenu>
                <HeaderIcon></HeaderIcon>
                
              </nav>
            </div>
        
        </div>
            
    )
  }
}

export default HeaderNav;
