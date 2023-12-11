import React from 'react'
import PropTypes from 'prop-types'

function NotesPageAction({ page, children }) {
  return (
    <div className={`${page}__action`}>
      { children }
    </div>
  )
}

NotesPageAction.propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default NotesPageAction;