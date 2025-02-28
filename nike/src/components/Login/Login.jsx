import React, { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState(false);

  const toggleModal = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLogin(!login); // Toggle login/signup state
  };

  return (
    <section className="flex flex-col bg-cyan-300 w-full h-screen">
      <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 w-[100%] h-auto bg-inherit rounded-lg flex flex-1 justify-center items-center flex-wrap">
        {/* Login Form */}
        <form
          className="w-[45vw] h-[75vh] bg-coral-red min-w-[600px] xl:rounded-s-xl max-lg:rounded-t-lg flex flex-col justify-center items-center gap-2 max-[700px]:min-w-[400px] max-[450px]:min-w-[300px]"
          onSubmit={toggleModal} // Handles form submit
        >
          <div
            className={`w-[100%] h-[35%] flex justify-center items-center flex-col gap-2 ${
              login ? "hidden" : "flex"
            }`}
          >
            <input
              type="text"
              placeholder="Username"
              className="w-[60%] h-[50px] px-3 rounded-lg max-[700px]:min-w-[80%]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-[60%] h-[50px] px-3 rounded-lg max-[700px]:min-w-[80%]"
            />
          </div>
          <button
            type="submit"
            className="w-24 h-10 bg-white rounded-lg hover:bg-green-400 hover:scale-110"
          >
            Login
          </button>
        </form>

        {/* Signup Form */}
        <form
          className="w-[45vw] h-[75vh] bg-yellow-200 min-w-[600px] xl:rounded-e-xl max-lg:rounded-b-lg flex flex-col justify-center items-center gap-2 max-[700px]:min-w-[400px] max-[450px]:min-w-[320px]"
          onSubmit={toggleModal} // Handles form submit
        >
          <div
            className={`w-[100%] h-[60%] flex justify-center items-center flex-col gap-2 ${
              login ? "flex" : "hidden"
            }`}
          >
            <input
              type="text"
              placeholder="Username"
              className="w-[60%] h-[50px] px-3 rounded-lg max-[700px]:min-w-[80%]"
            />
            <input
              type="email"
              placeholder="kosul@nike.com"
              className="w-[60%] h-[50px] px-3 rounded-lg max-[700px]:min-w-[80%]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-[60%] h-[50px] px-3 rounded-lg max-[700px]:min-w-[80%]"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-[60%] h-[50px] px-3 rounded-lg max-[700px]:min-w-[80%]"
            />
          </div>
          <button
            type="submit"
            className="w-24 h-10 bg-white rounded-lg hover:bg-green-400 hover:scale-110"
          >
            Signup
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
