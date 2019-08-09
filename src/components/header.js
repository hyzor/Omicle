import React, { Component } from 'react'

import '../styling/header.css'

class Header extends Component {
  render () {
    const { className = '', style = {}, scrollTop } = this.props
    return (
      <div style={style} className={`standard-header ${className} ${scrollTop}`}>
        {this.props.children}
      </div>
    )
  }
}

export default Header
