import React, {Component} from 'react'
import './loading.css'

class Loading extends Component {
  render () {
    return (
       <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
       </div>
    )
  }
}

export default Loading;
