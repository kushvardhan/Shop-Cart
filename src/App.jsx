import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import ProductDetails from './components/ProductDetails';
import Category from './components/Category';

function App() {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='/category/:name' element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
