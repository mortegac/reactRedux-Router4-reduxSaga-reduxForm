import React, {Component} from 'react';

class HeaderMenu extends Component {
  render () {
    return (
        <div>
            <span id="nav-toggle" className="nav-toggle"><span></span><span></span><span></span></span>

            <div id="nav-menu" className="nav-right nav-menu">
                <a href="" className="nav-item " style={{ color: '#fff'}}>Foro</a>
                <a href="" className="nav-item " style={{ color: '#fff'}}>Administración</a>
                {
                // <Link to='/' className="nav-item " style={{ color: '#fff'}}>Foro</Link>
                // <Link to='/administracion' className="nav-item " style={{ color: '#fff'}}>Administración</Link>
                }
            </div>
        </div>
    )
  }
}

export default HeaderMenu;
