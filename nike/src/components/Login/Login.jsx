import React from "react";

const Login = () => {
  return (
    <section className="flex flex-col bg-cyan-300 w-full h-screen sm:min-h-[450px]  max-sm:h-[120lvh] ">
      <div
        className="absolute top-28 left-1/2 transform -translate-x-1/2 w-[90%] max-sm:w-[95%] h-[75lvh] max-sm:top-20 max-sm:h-[100lvh]
      bg-slate-400 rounded-lg shadow-xl flex justify-center items-center"
      >
        <div className="w-[50%] h-[100%] bg-coral-red rounded-s-lg "></div>
        <div className="w-[50%] h-[100%] bg-yellow-200 rounded-e-lg "></div>
      </div>
    </section>
  );
};

export default Login;
