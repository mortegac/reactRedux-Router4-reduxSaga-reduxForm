import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HeaderMenu extends Component {
  render () {
    return (
        <div>
            <span id="nav-toggle" className="nav-toggle"><span></span><span></span><span></span></span>

            <div id="nav-menu" className="nav-right nav-menu">
                <Link to='/' className="nav-item " style={{ color: '#fff'}}>Foro</Link>
                <Link to='/administracion' className="nav-item " style={{ color: '#fff'}}>Administración</Link>
            </div>
        </div>
    )
  }
}

export default HeaderMenu;
