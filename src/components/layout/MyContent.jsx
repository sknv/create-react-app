import React from 'react'

const MyContent = ({ header, actions, content }) => (
  <React.Fragment>
    <header className="container-fluid py-2 header">
      <div className="row align-items-center">
        <div className="col-12 col-sm">{header}</div>
        {actions && (
          <div className="col-12 col-sm-auto action-group">{actions}</div>
        )}
      </div>
    </header>

    <main className="container-fluid py-2 content">{content}</main>
  </React.Fragment>
)

export default MyContent
