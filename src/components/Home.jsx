import React, { useEffect } from 'react';
import Card from './Card';
import Nav from './Nav';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../utils/CardSlice';

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.card);

    const getData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            console.log(response.data);
            dispatch(addData(response.data));
        } catch (err) {
            console.log('Error:', err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='w-full h-screen flex'>
            <div className='w-[20%] h-full bg-zinc-100'>
                <Nav />
            </div>
            <div className='w-[80%] h-full bg-zinc-200 flex flex-wrap justify-center gap-6 p-4 md:p-8 overflow-x-hidden overflow-y-auto'>
                {products.length > 0 ? (
                    products.map((item) => (
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
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Home;