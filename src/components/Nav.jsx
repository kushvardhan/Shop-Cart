import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { addNav } from '../utils/NavSlice';
import { addCategory } from '../utils/CategorySlice';

const Nav = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.nav);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const colors = ["bg-blue-300", "bg-red-300", "bg-green-300", "bg-orange-300"];

  useEffect(() => {
    const getNav = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products/categories');
        dispatch(addNav(res.data));
      } catch (err) {
        console.log("Error fetching categories:", err);
      }
    };
    getNav();
  }, [dispatch]);

  const fetchCategoryData = async (category) => {
    try {
      setSelectedCategory(category);
      const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      dispatch(addCategory(res.data));
    } catch (err) {
      console.log("Error fetching category data:", err);
    }
  };

  return (
    <div className='p-4 flex flex-col items-center bg-white shadow-lg rounded-lg w-full h-[calc(100%-4vw)] absolute bottom-0'>
      <Link 
        to="/add-product" 
        className='w-full text-center mt-4 py-3 mb-5 text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105'
      >
        ➕ Add New Product
      </Link>

      <hr className='w-full border-gray-300' />

      <h1 className='text-lg md:text-xl font-semibold mt-5 mb-2 text-gray-800 select-none w-full ml-2'>
        Category Filter
      </h1>
      
      <ul className='w-full flex flex-col gap-2 ml-2'>
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <li key={index} className='w-full'>
              <Link 
                to={`/category/${category.toLowerCase()}`} 
                onClick={() => fetchCategoryData(category)}
                className={`flex items-center w-full px-3 py-2 rounded-lg transition-all duration-300 
                  ${selectedCategory === category ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
              >
                <span className={`mr-3 w-3 h-3 rounded-full ${colors[index % colors.length]}`}></span> 
                <span className='text-sm md:text-md font-medium'>{category}</span>
              </Link>
            </li>
          ))
        ) : (
          <p className="text-gray-600 text-sm">Loading categories...</p>
        )}
      </ul>
    </div>
  );
};

export default Nav;
