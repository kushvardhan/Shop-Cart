import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/product-details/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
