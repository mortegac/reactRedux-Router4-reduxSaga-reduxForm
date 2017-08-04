import React, {Component} from 'react';

import HeaderNav from '../headerNav/headerNav'
import HeaderBody from '../headerBody/headerBody'


class Header extends Component {
  render () {
    return (
     <section className="hero is-providencia">
           
           <HeaderNav></HeaderNav>
           
           <HeaderBody></HeaderBody>

        </section>
    )
  }
}

export default Header;
