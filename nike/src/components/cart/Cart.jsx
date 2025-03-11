import React, { useState } from "react";
import { mycart } from "../../constanst";
import { MdDelete } from "react-icons/md";
import qr from "../../assets/images/qr.png";

const Cart = () => {
  const [checkout, setCheckout] = useState(false);
  const [cart, setCart] = useState(mycart);
  const [selectedItems, setSelectedItems] = useState([]);
  const [price, setPrice] = useState(null);

  const handleCheckbox = (item) => {
    setSelectedItems((prev) => {
      const updatedItems = prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item];
      const total = updatedItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
      setPrice(total.toFixed(2));
      return updatedItems;
    });
  };
  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);

    // Remove from selectedItems if needed
    const updatedSelected = selectedItems.filter(
      (item) => cart[index] !== item
    );
    setSelectedItems(updatedSelected);

    // Recalculate total price
    const total = updatedSelected.reduce((sum, i) => sum + i.price, 0);
    setPrice(total);
  };

  const myCheckOut = () => {
    setCheckout(!checkout);
  };
  return (
    <>
      {checkout ? (
        <section className="w-full h-screen bg-green-200 flex items-center justify-center">
          <div className="w-[400px] h-[70vh] bg-white rounded-xl shadow-xl flex justify-center items-center flex-col gap-6">
            <h1 className="flex flex-col items-start">
              Total Items: {selectedItems.length}
              <span></span>
              Total Price: ${price}
            </h1>
            <img
              src={qr}
              alt=""
              className="w-[200px] h-[200px] object-contain"
            />
            <h1 className="opacity-50">Do not scan this qr</h1>
            <button
              className="bg-black text-white w-[100px] h-[40px] rounded-lg text-lg hover:bg-red-400 hover:scale-110"
              onClick={myCheckOut}
            >
              Back
            </button>
          </div>
        </section>
      ) : (
        <section className="flex flex-col bg-white w-full h-[100vh] custom-scrollbar justify-center items-center">
          {mycart.length < 1 ? (
            <h1>No items</h1>
          ) : (
            <ul className="w-full h-[80vh] overflow-y-auto flex flex-wrap justify-center items-center gap-8 mt-6 no-scrollbar bg-slate-300">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="w-[400px] h-[300px] mt-4 mb-8 flex justify-center items-center bg-zinc-300 shadow-[0_0_10px_rgba(0,0,0,0.3)] has-[:checked]:bg-green-300 rounded-xl relative max-sm:w-[300px] px-2 gap-2 max-sm:h-fit max-sm:flex-col max-[350px]:w-[250px]"
                >
                  <MdDelete
                    className="w-8 h-8 cursor-pointer absolute top-1 right-1 text-red-500"
                    size={20}
                    onClick={() => removeItem(index)}
                  />
                  <input
                    type="checkbox"
                    name={item.label}
                    id={item.label}
                    className="w-8 h-8 cursor-pointer absolute top-2 left-2 rounded-full border-2 border-rose-300 appearance-none bg-white checked:bg-green-500"
                    onChange={() => handleCheckbox(item)}
                    checked={selectedItems.includes(item)}
                  />
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-[200px] h-[200px] object-contain"
                  />
                  <h1 className="flex justify-center items-start px-2 flex-col max-w-[150px] bg-white rounded-lg mb-4">
                    Name:
                    <span>{item.label}</span>
                    Price:
                    <span className="text-coral-red">${item.price}</span>
                    Quantity:
                    <span>{item.quantity}</span>
                  </h1>
                </li>
              ))}
            </ul>
          )}

          <div className="w-full h-[10vh] bg-coral-red absolute bottom-0 flex justify-evenly items-center">
            <h1>Items: {selectedItems.length}</h1>
            <h1>
              Price: <span>${price}</span>
            </h1>
            <button
              className="w-[100px] h-[40px] bg-white rounded-xl hover:scale-110 hover:bg-green-400"
              onClick={myCheckOut}
            >
              Checkout
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
