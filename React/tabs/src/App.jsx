import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'

function App() {
  // Create a shared state for tabs information
  const [tabs, setTabs] = useState([
    {
      label: "Tab1",
      content: "Tab 1 content",
      active: true,
    },
    {
      label: "Tab2",
      content: "Tab 2 content",
      active: false,
    },
    {
      label: "Tab3",
      content: "Tab 3 content",
      active: false,
    }
  ])

  // Function to change active tab 
  const changeActiveTab = (label) => {
    setTabs(
      tabs.map((item) => ({
        ...item,
        active: item.label === label // Set active based on condition
      }))
    );
  }

  return (
    <>
      <Navbar tabs={tabs} changeActive={changeActiveTab} />
      <Body tabs={tabs} />
    </>
  )
}

export default App