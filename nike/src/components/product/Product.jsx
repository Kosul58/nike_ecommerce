import React, { useRef, useState } from "react";
import { displayProducts } from "../../constanst";

const Product = () => {
  const search = useRef(null);
  const maxprice = useRef(null);
  const minprice = useRef(null);
  const [filteredproducts, setFilteredProducts] = useState(displayProducts);
  const searchprods = () => {
    let query = search.current.value.toLowerCase();
    setFilteredProducts(
      displayProducts.filter((item) => item.label.toLowerCase().includes(query))
    );
  };

  const filterprice = async () => {
    const min = minprice.current.value;
    const max = maxprice.current.value;
    setFilteredProducts(
      displayProducts.filter((item) => item.price >= min && item.price <= max)
    );
  };

  const [selectedYear, setSelectedYear] = useState("");

  const handleCheckboxChange = (event) => {
    setSelectedYear(event.target.name);
  };

  const filteryear = async () => {
    const year = selectedYear;
    setFilteredProducts(filteredproducts.filter((item) => item.year == year));
  };

  const filterprods = async () => {
    const year = selectedYear;
    setFilteredProducts(displayProducts.filter((item) => item.year == year));
    console.log(filteredproducts);
  };

  return (
    <section className="bg-emerald-300 w-full h-[100vh] flex items-center justify-center ">
      <div className="absolute top-[80px] w-[100%] min-h-[80vh] h-auto bg-inherit flex justify-center items-start gap-4">
        {/* product filter section */}
        <aside className=" sticky top-[150px] w-[20%] h-[70vh] bg-white min-h-[400px] rounded-xl overflow-y-auto no-scrollbar  max-sm:hidden">
          <div className="w-[100%] h-[40px] bg-yellow-100 flex justify-center items-center text-xl">
            <h2 className="font-montserrat"> Filters</h2>
          </div>
          <div className="w-[100%] h-[25%] bg-yellow-200 flex justify-center items-center flex-col">
            <h2>Price Range</h2>
            <div className="w-[100%] h-[60%] min-h-[70px] flex justify-center items-center gap-2">
              <input
                type="number"
                name="minp"
                id="minp"
                className="w-[120px] h-[50px] px-3 rounded-lg shadow-md"
                placeholder="$min"
                ref={minprice}
              />
              <input
                type="number"
                name="maxp"
                id="maxp"
                className="w-[120px] h-[50px] px-3 rounded-lg shadow-md"
                placeholder="$max"
                ref={maxprice}
              />
            </div>
          </div>
          <div className="w-[100%] h-[50%] bg-yellow-300 flex justify-center items-center flex-col gap-1">
            <h2>Year</h2>

            <div className="w-[80%] h-[40px] flex justify-center items-center gap-2">
              <input
                type="checkbox"
                name="2025"
                id="2025"
                className="w-4 h-4"
                checked={selectedYear === "2025"}
                onChange={handleCheckboxChange}
              />
              <h2>2025</h2>
            </div>

            <div className="w-[80%] h-[40px] flex justify-center items-center gap-2">
              <input
                type="checkbox"
                name="2024"
                id="2024"
                className="w-4 h-4"
                checked={selectedYear === "2024"}
                onChange={handleCheckboxChange}
              />
              <h2>2024</h2>
            </div>

            <div className="w-[80%] h-[40px] flex justify-center items-center gap-2">
              <input
                type="checkbox"
                name="2023"
                id="2023"
                className="w-4 h-4"
                checked={selectedYear === "2023"}
                onChange={handleCheckboxChange}
              />
              <h2>2023</h2>
            </div>

            <div className="w-[80%] h-[40px] flex justify-center items-center gap-2">
              <input
                type="checkbox"
                name="before"
                id="before"
                className="w-4 h-4"
                checked={selectedYear === "before"}
                onChange={handleCheckboxChange}
              />
              <h2>Before</h2>
            </div>
          </div>
          <div className="w-[100%] h-[10%] bg-inherit flex justify-center">
            <button
              className="w-[80px] h-[40px] bg-purple-300 mt-2 rounded-lg cursor-pointer hover:bg-green-500"
              onClick={filterprods}
            >
              Filter
            </button>
          </div>
        </aside>
        {/* product display section  */}
        <main className="w-[77%] h-auto min-h-[80vh]  bg-white mb-3 rounded-xl  flex justify-center items-center flex-col">
          <div
            className="w-[90%] h-[10vh] bg-inerit flex justify-center items-center gap-6"
            id="searchbar"
          >
            <input
              type="text"
              ref={search}
              className="w-[80%] h-[70%] px-4 rounded-xl outline-none leading-3 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              placeholder="airforce 1"
            />
            <button
              className="w-[10%] min-w-[60px] h-[70%] bg-gray-200 rounded-xl hover:scale-110 hover:bg-green-400 shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-pointer"
              onClick={searchprods}
            >
              Search
            </button>
          </div>
          <div
            className="w-[75vw] min-h-[75vh] h-auto  flex justify-center items-center flex-wrap "
            id="searchedcontent"
          >
            {filteredproducts.map((item) => (
              <div
                className="w-48 h-48 bg-white m-6 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.5)] flex flex-col justify-center items-center cursor-pointer hover:scale-110 hover:shadow-[0_0_10px_rgba(4,238,32,0.5)]"
                key={item.label}
              >
                <img
                  src={item.image}
                  width={140}
                  height={140}
                  alt={item.label}
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
