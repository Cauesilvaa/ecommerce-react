import React from 'react'

const SpanError = ({message}) => {
  return (
    <>
        <span style={{color: 'red'}}>{message}</span>
    </>
  )
}

export default SpanError