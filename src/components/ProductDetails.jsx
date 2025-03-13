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
        <div className="w-full min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-gray-100 to-gray-200">
            <div className="w-full max-w-6xl bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-6 transition-all duration-300">
                
                <div className="w-full md:w-1/2 flex justify-center">
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-[60%] sm:w-[50%] md:w-[80%] lg:w-[70%] xl:w-[60%] max-w-xs object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" 
                    />
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{product.title}</h2>
                    <p className="text-gray-700 text-sm sm:text-md leading-relaxed">{product.description}</p>

                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-2">
                        <span className="text-lg sm:text-xl font-semibold text-blue-600">${product.price}</span>
                        <span className="text-xs sm:text-sm text-gray-500 px-3 py-1 bg-gray-200 rounded-md">{product.category}</span>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mt-3">
                        <span className="text-orange-700 text-sm sm:text-lg font-bold">{product.rating.rate}⭐</span>
                        <span className="text-gray-500 text-xs sm:text-sm">({product.rating.count} reviews)</span>
                    </div>

                    <div className="w-full flex justify-center items-center">
                    <button className="w-[60%] items-center mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300">
                        Add to Cart 🛒
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
