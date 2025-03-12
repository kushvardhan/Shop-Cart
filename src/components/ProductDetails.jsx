import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <p className="text-center text-xl font-semibold mt-10">Loading...</p>;

    if (!product) return <p className="text-center text-xl font-semibold mt-10">Product not found.</p>;

    return (
        <div className="w-full h-screen flex items-center justify-center p-4 bg-gradient-to-r from-gray-100 to-gray-200">
            <div className="w-full md:w-[90%] lg:w-[80%] h-[90%] bg-white shadow-2xl rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 transition-all duration-300 hover:shadow-3xl">
                
                {/* Product Image */}
                <div className="w-full md:w-[40%] flex justify-center">
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-[220px] h-[280px] select-none object-contain rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300" 
                    />
                </div>

                {/* Product Details */}
                <div className="w-full md:w-[60%] flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{product.title}</h2>
                    <p className="text-gray-700 text-sm md:text-md mt-3 leading-relaxed">{product.description}</p>
                    
                    <div className="flex items-center gap-4 mt-4">
                        <span className="text-xl font-semibold text-blue-600">${product.price}</span>
                        <span className="text-sm text-gray-500 select-none px-3 py-1 bg-gray-200 rounded-md">{product.category}</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mt-3">
                        <span className="text-orange-700 text-lg font-bold">{product.rating.rate} ⭐</span>
                        <span className="text-gray-600 text-sm ml-2">({product.rating.count} reviews)</span>
                    </div>

                    <button className="mt-6 px-8 py-3 select-none bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300">
                        Add to Cart 🛒
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
