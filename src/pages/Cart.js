import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header"
import shirt from "../images/shirt.jpeg";
import pants from "../images/pants.jpeg";
import dress from "../images/dress.jpeg";
import sophia from "../images/sophia.png"

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      seller_name: "Xiaofan Li",
      seller_username: "xiaofans_closet21",
      name: "Vintage Adidas beige t shirt",
      size: "M",
      price: 10,
      quantity: 1,
      image: shirt,
      location: "The Dean",
      time: "Feb 26th 6:00pm",
    },
    {
      id: 2,
      seller_name: "Sophia Zhuang",
      seller_username: "sophs_stash",
      name: "American Rag Cie Women's Cream and Tan Trousers",
      size: "L",
      price: 5,
      quantity: 1,
      image: pants,
      location: "The Dean",
      time: "Mar 2nd 9:00pm",
    },
    {
      id: 3,
      seller_name: "Natalie Zhou",
      seller_username: "natuwu_loves_clothes",
      name: "American Rag Cie Women's Cream and Tan Trousers",
      size: 'S',
      price: 5,
      quantity: 1,
      image: dress,
      location: "The Dean",
      time: "Feb 28th 3:00pm",
    },
  ]);
  const history = useHistory();

  const handleQuantityChange = (itemId, newQuantity) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      } else {
        return item;
      }
    });
    setCartItems(newCartItems);
  };

  const handleRemoveItem = (itemId) => {
    const newCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newCartItems);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    // Save cartItems to database or perform other actions here
    // ...
    // Navigate to confirmation page
    history.push("/confirmation");
  };

  return (
    <div className="container mx-auto py-8 font-poppins">
      <Header></Header>
      <div className="text-lg font-bold mb-4">Bag</div>

      <div>
        {cartItems.map((item) => (
          <div className="mb-8 w-3/4 content-center p-6 outline outline-1 rounded-md">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex items-center">
                <img className="h-10 w-10 rounded-full mr-4" src={sophia} />
                <div>
                  <div className="font-bold text-sm">{item.seller_name}</div>
                  <div className="text-gray-700 text-xs">
                    @{item.seller_username}
                  </div>
                </div>
              </div>

              <div key={item.id} className="col-span-4 grid grid-cols-4 gap-4">
                <div>
                  <img src={item.image} alt={item.name} className="w-36" />
                </div>
                <div>
                  <div class="mb-2">{item.name}</div>
                  <div className="font-bold mb-2">${item.price.toFixed(2)}</div>
                  <div className="mb-2">{item.size}</div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    Remove
                  </button>
                </div>
                <div></div>
                <div>
                  <table className="border-collapse w-full text-sm">
                    <tbody>
                      <tr className="border-b border-gray-500">
                        <td className="p-2 pr-6 text-left ">Item(s):</td>
                        <td className="p-2 text-right">
                          ${item.price.toFixed(2)}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-500">
                        <td className="p-2 pr-6 text-left border-b border-gray-500">
                          Time:
                        </td>
                        <td className="p-2 text-right">{item.time}</td>
                      </tr>
                      <tr className="border-b border-gray-500">
                        <td className="p-2 pr-6 text-left">Location:</td>
                        <td className="p-2 text-right">{item.location}</td>
                      </tr>
                      <tr>
                        <td className="p-2 pr-6 text-left font-bold">Total:</td>
                        <td className="p-2 text-right font-bold">
                          US${subtotal.toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button
                    onClick={handleCheckout}
                    className="bg-black hover:bg-green-600 w-full text-white font-bold py-2 px-4 rounded mt-2"
                  >
                    Checkout {item.quantity} Item
                  </button>
                </div>
              </div>

              <div className="col-span-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
