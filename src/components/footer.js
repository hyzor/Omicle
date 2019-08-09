import React, { Component } from 'react'

import '../styling/footer.css'

class Footer extends Component {
  render () {
    const { className = '', style = {} } = this.props
    return (
      <div style={style} className={`standard-footer ${className}`}>
        {this.props.children}
      </div>
    )
  }
}

export default Footer
