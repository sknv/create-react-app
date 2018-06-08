import PropTypes from 'prop-types'
import React from 'react'

import Footerbar from './Footerbar'

export default function Page({ children }) {
  return (
    <div className="page">
      {/* Topbar and main sections */}
      {children}

      <footer className="footerbar">
        <Footerbar />
      </footer>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.element.isRequired
}
