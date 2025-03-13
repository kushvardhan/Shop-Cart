import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./components/Home";
import ProductDetails from './components/ProductDetails';
import Category from './components/Category';
import { Link } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {location.pathname !== '/' && (
        <div className="absolute top-4 left-[1%] z-50">
          <Link 
            to="/" 
            className="px-6 py-2 text-gray-800 font-semibold rounded-lg text-sm transition-all duration-300 hover:scale-105 hover:bg-gray-300 hover:text-black"
          >
            🏠 Home
          </Link>
        </div>
      )}

      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='/category/:name' element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
