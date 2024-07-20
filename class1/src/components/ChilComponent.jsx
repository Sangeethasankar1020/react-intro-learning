import React from 'react'

import PropTypes from "prop-types"


export const ChilComponent = (props) => {
  return (
    <div>{props.children}</div>
  )
}


ChilComponent.PropTypes={
    children:PropTypes.array
}