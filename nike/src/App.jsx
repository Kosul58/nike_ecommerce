import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PopularProducts from "./components/PopularProducts";
import SpecialOffer from "./components/SpecialOffer";
import Subscribe from "./components/Subscribe";
import SuperQuality from "./components/SuperQuality";
import Services from "./components/Services";
import Nav from "./components/Nav";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";
import Login from "./components/Login/Login";

const App = () => (
  <Router>
    <main className="relative">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
              </section>
              <section className="padding">
                <PopularProducts />
              </section>
              <section className="padding">
                <SuperQuality />
              </section>
              <section className="padding-x py-10">
                <Services />
              </section>
              <section className="padding">
                <SpecialOffer />
              </section>
              <section className="padding bg-pale-blue">
                <CustomerReviews />
              </section>
              <section className="padding-x sm:py-32 py-16 w-full">
                <Subscribe />
              </section>
              <section className="padding-x bg-black padding-t pb-8">
                <Footer />
              </section>
            </>
          }
        />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  </Router>
);

export default App;
