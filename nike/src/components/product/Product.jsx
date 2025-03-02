import React, { useRef, useState } from "react";
import { displayProducts } from "../../constanst";
import { IoIosCloseCircle } from "react-icons/io";
import { mycart } from "../../constanst";

const Product = () => {
  const search = useRef(null);
  const maxprice = useRef(null);
  const minprice = useRef(null);
  const itemcount = useRef(1);
  const [filteredproducts, setFilteredProducts] = useState(displayProducts);
  const searchprods = () => {
    let query = search.current.value.toLowerCase();
    setFilteredProducts(
      displayProducts.filter((item) => item.label.toLowerCase().includes(query))
    );
  };

  const [selectedYear, setSelectedYear] = useState("");

  const handleCheckboxChange = (event) => {
    const value = event.target.name;
    if (value === selectedYear) {
      setSelectedYear("");
    } else {
      setSelectedYear(event.target.name);
    }
  };

  // const filterprice = async () => {
  //   const min = minprice.current.value;
  //   const max = maxprice.current.value;
  //   setFilteredProducts(
  //     displayProducts.filter((item) => item.price >= min && item.price <= max)
  //   );
  // };

  // const filteryear = async () => {
  //   const year = selectedYear;
  //   if (year) {
  //     setFilteredProducts(displayProducts.filter((item) => item.year == year));
  //   } else {
  //     setFilteredProducts(displayProducts);
  //   }
  // };

  const filterprods = async () => {
    const min = minprice.current.value;
    const max = maxprice.current.value;
    const year = selectedYear;
    if (year == "before") {
      alert("upcoming");
      return;
    }
    if (!min && !max & !year) {
      alert("Enter selection criteria");
    } else if ((min || max) && !year) {
      if (min && !max) {
        setFilteredProducts(
          displayProducts.filter((item) => item.price >= min)
        );
      } else if (!min && max) {
        setFilteredProducts(
          displayProducts.filter((item) => item.price <= max)
        );
      } else {
        setFilteredProducts(
          displayProducts.filter(
            (item) => item.price >= min && item.price <= max
          )
        );
      }
      // alert("min and max but not year");
    } else if (!min && !max && year) {
      setFilteredProducts(displayProducts.filter((item) => item.year == year));
      // alert("no min and max but have year");
    } else if ((min || max) && year) {
      if (min && !max) {
        setFilteredProducts(
          displayProducts.filter(
            (item) => item.price >= min && item.year == year
          )
        );
      } else if (!min && max) {
        setFilteredProducts(
          displayProducts.filter(
            (item) => item.price <= max && item.year == year
          )
        );
      } else {
        setFilteredProducts(
          displayProducts.filter(
            (item) =>
              item.price >= min && item.price <= max && item.year == year
          )
        );
      }
      // alert("all values present");
    }
  };

  const [productvisible, setProductVisible] = useState(false);
  const [modalitem, setModalItem] = useState("");
  const showModal = (item) => {
    setProductVisible(true);
    setModalItem(item);
  };
  const closeModal = () => {
    setProductVisible(false);
  };

  const addtocart = (item) => {
    alert("item added to cart");
    mycart.push(item);
  };

  return (
    <section className="bg-emerald-300 w-full h-[100vh] flex items-center justify-center ">
      <div className="absolute top-[80px] w-[100%] min-h-[80vh] h-auto bg-inherit flex justify-center items-start gap-4">
        {/* product filter section */}
        <aside className=" sticky top-[150px] w-[20%] h-[70vh] bg-slate-200 min-h-[400px] rounded-xl overflow-y-auto no-scrollbar  max-sm:hidden">
          <div className="w-[100%] h-[40px]  flex justify-center items-center text-xl">
            <h2 className="font-montserrat"> Filters</h2>
          </div>
          <div className="w-[100%] h-[25%]  flex justify-center items-center flex-col">
            <h2>Price Range</h2>
            <div className="w-[100%] h-[60%] min-h-[70px] flex justify-center items-center gap-2 flex-wrap">
              <input
                type="number"
                name="minp"
                id="minp"
                className="w-[120px] h-[50px] px-3 rounded-lg shadow-md"
                placeholder="$min"
                ref={minprice}
                min={1}
              />
              <input
                type="number"
                name="maxp"
                id="maxp"
                className="w-[120px] h-[50px] px-3 rounded-lg shadow-md"
                placeholder="$max"
                ref={maxprice}
                min={1}
              />
            </div>
          </div>
          <div className="w-[100%] h-[50%] flex justify-center items-center flex-col gap-1">
            <h2>Year</h2>

            <label className="w-[60%] h-[40px] flex justify-center items-center gap-2 cursor-pointer has-[:checked]:bg-green-300 rounded-xl">
              <input
                type="checkbox"
                name="2025"
                id="2025"
                className="w-4 h-4 "
                checked={selectedYear === "2025"}
                onChange={handleCheckboxChange}
              />
              <h2>2025</h2>
            </label>

            <label className="w-[60%] h-[40px] flex justify-center items-center gap-2 cursor-pointer  has-[:checked]:bg-green-300 rounded-xl">
              <input
                type="checkbox"
                name="2024"
                id="2024"
                className="w-4 h-4"
                checked={selectedYear === "2024"}
                onChange={handleCheckboxChange}
              />
              <h2>2024</h2>
            </label>

            <label className="w-[60%] h-[40px] flex justify-center items-center gap-2 cursor-pointer  has-[:checked]:bg-green-300 rounded-xl">
              <input
                type="checkbox"
                name="2023"
                id="2023"
                className="w-4 h-4"
                checked={selectedYear === "2023"}
                onChange={handleCheckboxChange}
              />
              <h2>2023</h2>
            </label>

            <label className="w-[60%] h-[40px] flex justify-center items-center gap-2 cursor-pointer  has-[:checked]:bg-green-300 rounded-xl">
              <input
                type="checkbox"
                name="before"
                id="before"
                className="w-4 h-4"
                checked={selectedYear === "before"}
                onChange={handleCheckboxChange}
              />
              <h2>Before</h2>
            </label>
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
            className={`fixed top-1/2 -translate-y-1/2 xl:right-2/8 lg:right-1/8 w-[30vw] h-[50vh]  min-h[300px] max-[1500px]:min-w-[500px] max-sm:min-w-[300px]
              max-sm:min-h-[500px] gap-2
          bg-cyan-300 z-10 ${
            productvisible ? "flex" : "hidden"
          } items-center justify-center flex-col rounded-xl shadow-lg`}
          >
            {" "}
            <IoIosCloseCircle
              size={30}
              className="hover:text-red-500 absolute right-1 top-1 cursor-pointer"
              onClick={closeModal}
            />
            <div className="flex gap-2 w-auto flex-wrap justify-center items-center px-2">
              <img
                src={modalitem.image}
                alt="showimg"
                className="w-[250px] h-[250px] object-contain "
              />
              <h2 className="flex items-start justify-center flex-col border-2 bg-slate-200 rounded-lg px-2 shadow-sm">
                Name:
                <span>{modalitem.label}</span>
                Price:
                <span className="text-coral-red">${modalitem.price}</span>
                Year:
                <span>{modalitem.year}</span>
              </h2>
            </div>
            <div className="flex gap-4">
              <input
                type="number"
                name="count"
                id="count"
                ref={itemcount}
                placeholder="1"
                className="outline-none px-2 w-14 h-10 rounded-md"
                min={1}
              />
              <button
                className="bg-white px-2 rounded-md hover:bg-green-300 hover:scale-110"
                onClick={() => addtocart(modalitem)}
              >
                Add to Cart
              </button>
            </div>
          </div>
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
                onClick={() => showModal(item)}
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
