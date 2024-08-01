import React, { useState } from 'react'

const Body = (props) => {
  return (
    <div className='my-2 card'>
      {props.tabs.map((item, index) => (
        <React.Fragment key={index}>{item.active && <p>{item.content}</p>}</React.Fragment>
        // <p key={index}>{item.active && item.content}</p> // this will add empty p tags
      ))
      }
    </div>
  )
}

export default Body