import React from "react";
import { displayProducts } from "../../constanst";

const Product = () => {
  let myproducts = displayProducts;
  return (
    <section className="bg-emerald-300 w-full h-[100vh] flex items-center justify-center ">
      <div className="absolute top-[80px] w-[100%] min-h-[80vh] h-auto bg-inherit flex justify-center items-start gap-4">
        <aside className=" sticky top-[150px] w-[20%] h-[70vh] bg-white min-h-[400px] rounded-xl overflow-y-auto no-scrollbar  max-sm:hidden">
          <div className="w-[100%] h-[40px] bg-yellow-100 flex justify-center items-center text-xl">
            Filter
          </div>
          <div className="w-[100%] h-[40%] bg-yellow-200"></div>
          <div className="w-[100%] h-[30%] bg-yellow-300"></div>
          <div className="w-[100%] h-[30%] bg-yellow-100"></div>
        </aside>
        <main className="w-[77%] h-auto min-h-[80vh]  bg-white mb-3 rounded-xl  flex justify-center items-center flex-col">
          <div
            className="w-[90%] h-[10vh] bg-inerit flex justify-center items-center gap-6"
            id="searchbar"
          >
            <input
              type="text"
              className="w-[80%] h-[70%] px-4 rounded-xl outline-none leading-3 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              placeholder="airforce 1"
            />
            <button className="w-[10%] min-w-[60px] h-[70%] bg-gray-200 rounded-xl hover:scale-110 hover:bg-green-400 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              Search
            </button>
          </div>
          <div
            className="w-[75vw] min-h-[75vh] h-auto  flex justify-center items-center flex-wrap "
            id="searchedcontent"
          >
            {myproducts.map((item) => (
              <div className="w-48 h-48 bg-white m-6 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.5)] flex flex-col justify-center items-center cursor-pointer hover:scale-110 hover:shadow-[0_0_10px_rgba(4,238,32,0.5)]">
                <img
                  src={item.image}
                  width={140}
                  height={140}
                  alt=""
                  className="object-contain"
                />
                <h2 className="text-[15px]">{item.label}</h2>
                <p className="text-sm text-coral-red">{`$${item.price}`}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Product;
