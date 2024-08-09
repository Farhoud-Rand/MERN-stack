import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProductDetails from './components/ProductDetails';
import Update from './views/Update';
function App() {
  return (
    
    <div className="container">
        <div className="row">
          <Routes>
              <Route path="/products" element={<Main/>} />
              <Route path="/products/:id" element={<ProductDetails/>} />
              <Route path="/product/edit/:id" element={<Update/>} />
          </Routes>
        </div>
    </div>
  );
}
export default App;