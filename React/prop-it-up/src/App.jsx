import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from '../components/person'

// App is the root component
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Create new components from Person component */}
    <Person firstName = {"Jame"} lastName={"Doe"} inputAge={45} color={"Black"}/>
    <Person firstName = {"John"} lastName={"Smith"} inputAge={88} color={"Brown"}/>
    <Person firstName = {"Millard"} lastName={"Fillmore"} inputAge={50} color={"Brown"}/>
    <Person firstName = {"Maria"} lastName={"Smith"} inputAge={45} color={"Brown"}/>
    </>
  )
}
export default App