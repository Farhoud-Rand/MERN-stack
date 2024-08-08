import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    
    <div className="container">
        <div className="row">
          <Routes>
              <Route path="/" element={<Main/>} />
          </Routes>
        </div>
    </div>
  );
}
export default App;