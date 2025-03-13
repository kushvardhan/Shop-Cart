import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { addCategory } from '../utils/CategorySlice';

const Category = () => {
    const categoryData = useSelector(state => state.category);
    const { category } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
                dispatch(addCategory(res.data));
            } catch (err) {
                console.log("Error fetching category data:", err);
            }
        };

        if (category) {
            fetchCategoryData();
        }
    }, [category, dispatch]); 

    return (
        <div className='w-full h-screen flex'>
            <div className='w-[20%] h-full bg-white relative'>
                <Nav />
            </div>

            <div className='w-[80%] h-full bg-zinc-200 flex flex-wrap justify-center gap-6 p-4 md:p-8 overflow-x-hidden overflow-y-auto'>
                {categoryData.length > 0 ? (
                    categoryData.map((item) => (
                        <Card 
                            key={item.id} 
                            id={item.id} 
                            image={item.image} 
                            title={item.title} 
                            price={item.price} 
                            rating={item.rating} 
                        />
                    ))
                ) : (
                    <p className='text-lg text-gray-600 font-medium'>No items found in this category.</p>
                )}
            </div>
        </div>
    );
};

export default Category;
