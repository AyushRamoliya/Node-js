import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const totalPrice = useSelector((state) => state.apiKey?.Total);

  const Itemcount = useSelector((state)=> state.apiKey?.item)
  return (
    <>
      <div className="bg-white shadow-md p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold">
              <span className="text-yellow-400">blink</span>
              <span className="text-green-500">it</span>
            </div>
            <div className="text-sm">
              <p className="font-semibold">Delivery in 12 minutes</p>
              <p className="text-gray-500">Khodal chowk, near matuki family...</p>
            </div>
          </div>

          <div className="flex-grow mx-8">
            <input
              type="text"
              placeholder='Search "curd"'
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 font-medium">Login</button>
            <Link to={"/cart"}>
            <button className="bg-green-500 text-white font-medium px-10 py-1 rounded-full">
              {
                totalPrice ?  
                <p>{Itemcount} items
                <br />
                ₹{totalPrice}
                </p>
                : <p className='my-3'>ADD CART</p>
              }
              
            </button>
            </Link>
          </div>
        </div>
        <br />
        <hr />
        <div className="container mt-4 px-32 text-center w-[100%]">
          <div className="flex space-x-12 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-black">
              Vegetables & Fruits
            </a>
            <a href="#" className="hover:text-black">
              Dairy & Breakfast
            </a>
            <a href="#" className="hover:text-black">
              Munchies
            </a>
            <a href="#" className="hover:text-black">
              Cold Drinks & Juices
            </a>
            <a href="#" className="hover:text-black">
              Instant & Frozen Food
            </a>
            <a href="#" className="hover:text-black">
              Tea, Coffee & Health Drinks
            </a>
            <a href="#" className="hover:text-black">
              Bakery & Biscuits
            </a>
            <a href="#" className="hover:text-black">
              More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
