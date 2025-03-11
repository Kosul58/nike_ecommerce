import React, { useRef, useState, useEffect } from "react";
import { displayProducts } from "../../constanst";
import { data } from "../product/shoes";
import { IoIosCloseCircle } from "react-icons/io";
import { mycart } from "../../constanst";
import { FaFilter } from "react-icons/fa6";

const Product = () => {
  const search = useRef(null);
  const maxprice = useRef(null);
  const minprice = useRef(null);
  const itemcount = useRef(1);

  const [filteredproducts, setFilteredProducts] = useState(data.slice(0, 50));
  const [selectedYear, setSelectedYear] = useState("");
  const [searchstate, setSearchstate] = useState(false);

  // function transformdata(data) {
  //   return (
  //     data.data?.map((item) =>
  //       item.model
  //         ? {
  //             id: item.id,
  //             label: item.model,
  //             price: parseFloat(item.avg_price.toFixed(2)), // Rounds to 2 decimal places
  //             image: item.image,
  //             year: new Date(item.created_at).getFullYear(), // Extracts year from date
  //           }
  //         : {}
  //     ) || []
  //   );
  // }

  // const fetchNikeShoes = async () => {
  //   let url = `https://api.sneakersapi.dev/api/v3/stockx/products/?brand=Nike&limit=100&page=400`;
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       Authorization: "sd_ZWZJzvCXXU2pbqVKqeuRussTbhfge0o5", // Replace with your actual API key
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   try {
  //     const response = await fetch(url, options);
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     let transformedArr = transformdata(data);
  //     console.log("Fetched Data:", transformedArr);
  //     return transformedArr;
  //   } catch (error) {
  //     console.error("Error fetching Nike shoes:", error.message);
  //     return null;
  //   }
  // };

  // useEffect(() => {
  //   const loadShoes = async () => {
  //     const data = await fetchNikeShoes();
  //     if (!data) {
  //       setFilteredProducts(displayProducts);
  //     } else {
  //       setFilteredProducts(data);
  //     }
  //   };
  //   loadShoes();
  // }, []);

  // Search Products Function
  const searchprods = async () => {
    if (!searchstate) {
      setSearchstate(true);
    }
    let query = search.current.value.trim().toLowerCase(); // Trim to remove spaces
    let fdata = data.filter((x) => {
      if (x.label && typeof x.label === "string") {
        // Ensure label is a string and exists
        if (x.label.toLowerCase().includes(query)) return x;
      }
    });
    setFilteredProducts(fdata);
  };

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

    if (searchstate) {
      if (year == "before") {
        alert("upcoming");
        return;
      }
      if (!min && !max & !year) {
        alert("Enter selection criteria");
      } else if ((min || max) && !year) {
        if (min && !max) {
          setFilteredProducts(
            filteredproducts.filter((item) => item.price >= min)
          );
        } else if (!min && max) {
          setFilteredProducts(
            filteredproducts.filter((item) => item.price <= max)
          );
        } else {
          setFilteredProducts(
            filteredproducts.filter(
              (item) => item.price >= min && item.price <= max
            )
          );
        }
        // alert("min and max but not year");
      } else if (!min && !max && year) {
        setFilteredProducts(
          filteredproducts.filter((item) => item.year == year)
        );
        // alert("no min and max but have year");
      } else if ((min || max) && year) {
        if (min && !max) {
          setFilteredProducts(
            filteredproducts.filter(
              (item) => item.price >= min && item.year == year
            )
          );
        } else if (!min && max) {
          setFilteredProducts(
            filteredproducts.filter(
              (item) => item.price <= max && item.year == year
            )
          );
        } else {
          setFilteredProducts(
            filteredproducts.filter(
              (item) =>
                item.price >= min && item.price <= max && item.year == year
            )
          );
        }
        // alert("all values present");
      }
    } else {
      console.log("no search filter");

      if (year == "before") {
        alert("upcoming");
        return;
      }
      if (!min && !max & !year) {
        alert("Enter selection criteria");
      } else if ((min || max) && !year) {
        if (min && !max) {
          setFilteredProducts(data.filter((item) => item.price >= min));
        } else if (!min && max) {
          setFilteredProducts(data.filter((item) => item.price <= max));
        } else {
          setFilteredProducts(
            data.filter((item) => item.price >= min && item.price <= max)
          );
        }
        // alert("min and max but not year");
      } else if (!min && !max && year) {
        setFilteredProducts(data.filter((item) => item.year == year));
        // alert("no min and max but have year");
      } else if ((min || max) && year) {
        if (min && !max) {
          setFilteredProducts(
            data.filter((item) => item.price >= min && item.year == year)
          );
        } else if (!min && max) {
          setFilteredProducts(
            data.filter((item) => item.price <= max && item.year == year)
          );
        } else {
          setFilteredProducts(
            data.filter(
              (item) =>
                item.price >= min && item.price <= max && item.year == year
            )
          );
        }
        // alert("all values present");
      }
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
    item.quantity = itemcount.current.value || 1;
    mycart.push(item);
    console.log(item);
  };

  const [modalfilter, setmodalfiltercontrol] = useState(true);
  const showmodalfilter = () => {
    setmodalfiltercontrol((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setmodalfiltercontrol(true);
      }
    };

    // Check on mount
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className=" bg-white/80 w-full h-[100vh] flex items-center justify-center ">
      <FaFilter
        className="fixed top-6 left-3 text-coral-red z-20 hidden  max-sm:flex "
        size={30}
        onClick={showmodalfilter}
      />
      {/* modalfilter starts here */}
      <aside
        className={`fixed top-[120px] w-[50%] h-[70vh] min-h-[400px] rounded-xl overflow-y-auto no-scrollbar gap-2 ${
          modalfilter ? "hidden" : "flex"
        } z-30 flex-col bg-cyan-500 px-2 min-w-[250px] `}
      >
        <div className="w-[100%] h-[40px]  flex justify-center items-center text-xl">
          <h2 className="font-mono text-3xl text-coral-red font-bold">
            {" "}
            Filters
          </h2>
        </div>
        <div className="w-[100%] h-[25%] max-lg:h-[180px]  flex justify-center items-center flex-col  bg-slate-300 rounded-lg">
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
        <div className="w-[100%] h-[40%] flex justify-center items-center flex-col gap-1 bg-sky-200  rounded-lg">
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
            className="w-[80px] h-[40px] bg-purple-300 rounded-lg cursor-pointer hover:bg-green-500 hover:scale-110"
            onClick={filterprods}
          >
            Filter
          </button>
        </div>
      </aside>
      {/* modalfilter ends here */}
      <div className="absolute top-[80px] w-[100%] min-h-[80vh] h-auto bg-inherit flex justify-center items-start gap-4">
        {/* product filter section */}
        <aside className=" sticky top-[15%] w-[20%] min-w-[200px] h-[70vh] min-h-[600px] rounded-xl overflow-y-auto no-scrollbar  max-sm:hidden gap-2 ml-8">
          <div className="w-[100%] h-[40px]  flex justify-center items-center text-xl">
            <h2 className="font-mono text-3xl text-coral-red font-bold">
              {" "}
              Filters
            </h2>
          </div>
          <div className="w-[100%] h-[25%] max-lg:h-[180px]  flex justify-center items-center flex-col  bg-slate-300 rounded-lg">
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
          <div className="w-[100%] h-[40%] flex justify-center items-center flex-col gap-1 bg-sky-200 mt-2 rounded-lg">
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
              className="w-[80px] h-[40px] bg-purple-300 mt-2 rounded-lg cursor-pointer hover:bg-green-500 hover:scale-110"
              onClick={filterprods}
            >
              Filter
            </button>
          </div>
        </aside>

        {/* product display section  */}
        <main className="w-[77%] h-auto min-h-[80vh]  mb-3 rounded-xl  flex justify-center items-center flex-col">
          <div
            className={`fixed top-1/2 -translate-y-1/2 xl:right-2/8 lg:right-1/8 w-[30vw] h-[50vh]  min-h[300px] max-[1500px]:min-w-[500px] max-[700px]:min-w-[300px]
              max-[700px]:min-h-[500px] gap-2
              max-[400px]:min-w-[250px] shadow-[0_0_18px_rgba(0,0,0,0.8)]
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
                className="max-w-[300px] max-h-[200px] object-contain max-sm:w-[80%] rounded-xl shadow-[0_0_8px_rgba(0,0,0,0.4)]"
              />
              <h2 className="text-md flex items-start justify-center flex-col border-2 bg-slate-100/80 rounded-lg px-2 shadow-[0_0_8px_rgba(0,0,0,0.4)] max-w-[150px]">
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
                className="outline-none px-2 w-14 h-10 rounded-md shadow-[0_0_8px_rgba(0,0,0,0.4)]"
                min={1}
              />
              <button
                className="bg-white px-2 rounded-md hover:bg-green-300 hover:scale-110 shadow-[0_0_8px_rgba(0,0,0,0.4)]"
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
                className="w-48 h-48 bg-white m-6 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.5)] flex flex-col justify-center items-center cursor-pointer hover:scale-110 hover:shadow-[0_0_10px_rgba(4,238,32,0.5)] max-sm:w-[150px]"
                key={`${item.id + item.price + item.image}`}
                onClick={() => showModal(item)}
              >
                <img
                  src={item.image}
                  width={140}
                  height={140}
                  alt={item.label}
                  className="object-contain"
                />
                <h2 className="text-[15px] px-2">{item.label}</h2>
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
