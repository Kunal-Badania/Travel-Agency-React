import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="app-component-container">
      <a href="tel:6376523841" className="app-component-link">
        {props.text}
      </a>
    </div>
  )
}

AppComponent.defaultProps = {
  text: 'Contact',
}

AppComponent.propTypes = {
  text: PropTypes.string,
}

export default AppComponent
