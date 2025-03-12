import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addData } from '../utils/CardSlice';
import axios from 'axios';
import { addNav } from '../utils/NavSlice';


const Nav = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state=>state.nav);
  const colors = ["bg-blue-300", "bg-red-300", "bg-green-300", "bg-orange-300"];

  async function getNav() {
    try {
      const res = await axios.get('https://fakestoreapi.com/products/categories');
      console.log(res.data);
      dispatch(addNav(res.data));
    } catch (er) {
      console.log(er);
    }
  }

  useEffect(()=>{
    getNav();
  },[])

  return (
    <div className='p-4 flex flex-col items-center bg-white shadow-lg rounded-lg w-full h-full'>
      {/* Add Product Button */}
      <button className='w-full mt-4 py-2 mb-5 select-none text-white bg-blue-500 rounded-lg text-md font-medium transition-all duration-300 hover:bg-blue-600 active:scale-95'>
        Add New Product
      </button>

      <hr className='w-full border-gray-300' />

      <h1 className='text-lg md:text-xl font-semibold mt-5 mb-2 text-gray-800 select-none w-full ml-2'>Category Filter</h1>
      <ul className='w-full flex flex-col gap-2 ml-2'>
  {categories.map((category, index) => (
    <li key={index} className='w-full'>
      <Link 
        className='flex items-center w-full px-3 py-1 rounded-lg transition-all duration-300 hover:bg-gray-100'
        to={`/category/${category.toLowerCase()}`}
      >
        <span className={`mr-3 w-3 h-3 rounded-full ${colors[index % colors.length]}`}></span> 
        <span className='text-sm md:text-md font-medium text-gray-700'>{category}</span>
      </Link>
    </li>
  ))}
</ul>
    </div>
  );
};

export default Nav;
