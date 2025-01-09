import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Cart() {

    const cartItems = useSelector((state) => state.apiKey.cart);
    const totalPrice = useSelector((state) => state.apiKey?.Total);
    const Itemcount = useSelector((state) => state.apiKey?.item)

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart</h2>
            <ul className="space-y-4">
                {cartItems.map((item) => (
                    <li key={item.id} className="flex justify-between items-center bg-white shadow-lg rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center space-x-4">
                            <img className="w-20 h-20 object-cover rounded-lg" src={item.img} alt={item.title} />
                            <div>
                                <p className="font-medium text-gray-800">{item.title}</p>
                                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                            </div>
                        </div>
                        <p className="text-gray-800 font-semibold">₹{item.price * item.quantity}</p>
                    </li>
                ))}
            </ul>

            <div className="mt-6 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
                <ul>
                    <li className="flex justify-between text-gray-800 font-medium">
                        <span>Items: </span>
                        <span>{Itemcount}</span>
                    </li>
                    <li className="flex justify-between text-gray-800 font-semibold text-lg mt-2">
                        <span>Total Amount: </span>
                        <span>₹{totalPrice}</span>
                    </li>
                </ul>
            </div>

            <div className="mt-6 flex justify-between items-center">
                <Link to={"/"}>
                    <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        Add More Items
                    </button>
                </Link>
            </div>
        </div>
    )
}
