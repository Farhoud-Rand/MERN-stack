import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    
    <div className="container">
        <div className="row">
          <Routes>
              <Route path="/products" element={<Main/>} />
              <Route path="/products/:id" element={<ProductDetails/>} />
          </Routes>
        </div>
    </div>
  );
}
export default App;