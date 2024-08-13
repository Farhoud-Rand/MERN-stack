import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import io from 'socket.io-client';
// import Chat from './components/Chat';
function App() {
 

  const [socket] = useState(() => io(':8000'));

  useEffect(() => {
    // we need to set up all of our event listeners
    // in the useEffect callback function
    console.log('Is this running?');
    socket.on('Welcome', data => console.log(data));
 
    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.removeAllListeners;
  }, [socket]);

  return (
    <>
      {/* <Chat />  */}
      {/* <p className="read-the-docs">
        Socket Test

      </p> */}
    </>
  )
}

export default App
