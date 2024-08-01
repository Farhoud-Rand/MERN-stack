import React from 'react'

const Navbar = (props) => {
  // Function to handle buttons click 
  const handleClick = (tab) => {
    props.changeActive(tab.label)
  }

  return (
    <div className='row'>
      {props.tabs.map((item, index) => (
        <button onClick={() =>handleClick(item)} key={index} className={item.active ? 'btn btn-dark col-3 p-2 mx-3' : 'btn btn-light col-3 p-2 mx-3'}> {item.label}</button>
      ))
      }
    </div>
  )
}

export default Navbar