import React, { Component } from 'react'

import '../styling/section.css'

class Section extends Component {
  render () {
    const { className = '', style = {} } = this.props
    return (
      <section style={style} className={`standard-section ${className}`}>
        {this.props.children}
      </section>
    )
  }
}

export default Section
