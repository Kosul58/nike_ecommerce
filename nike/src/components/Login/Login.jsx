import React, { useRef, useState } from "react";
import UserDashboard from "../Userdashboard/UserDashboard";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [signup, setSignup] = useState(true);
  const [logged, setLogged] = useState(false);
  const luname = useRef(null);
  const lpwd = useRef(null);
  const suname = useRef(null);
  const spwd = useRef(null);
  const scpwd = useRef(null);
  const semail = useRef(null);

  const [udata, setUdata] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const x = luname.current.value;
    const y = lpwd.current.value;
    if (login) {
      if (!x || !y) {
        alert("Enter both password and value");
      } else {
        alert("Login Successfull");
        setLogged(!logged);
        setUdata(x);
      }
    } else {
      setLogin(!login);
      setSignup(!signup);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const x = suname.current.value;
    const y = spwd.current.value;
    const y2 = scpwd.current.value;
    const z = semail.current.value;
    if (signup) {
      setSignup(!signup);
      setLogin(!login);
    } else {
      alert("Login Successfull");
      setUdata(x);
    }
  };

  return (
    <>
      {/* Login part */}
      <section
        className={`flex flex-col bg-cyan-300 w-full h-screen ${
          !logged ? "flex" : "hidden"
        } `}
      >
        <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 w-[100%] h-auto bg-inherit rounded-lg flex flex-1 justify-center items-center flex-wrap py-8">
          {/* Login Form */}
          <form
            className="w-[45vw] h-[75vh] bg-coral-red min-w-[600px] xl:rounded-s-xl max-lg:rounded-t-lg flex flex-col justify-center items-center gap-2 max-[700px]:min-w-[400px] max-[450px]:min-w-[90%]"
            onSubmit={handleLogin}
          >
            <div
              className={`w-[100%] h-[35%] flex justify-center items-center flex-col gap-2 ${
                login ? "flex" : "hidden"
              }`}
            >
              <input
                type="text"
                placeholder="Username"
                className="w-[60%] h-[50px] px-3 rounded-lg max-[700px]:min-w-[80%]"
                ref={luname}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-[60%] h-[50px] px-3 rounded-lg max-[700px]:min-w-[80%]"
                ref={lpwd}
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
            className="w-[45vw] h-[75vh] bg-yellow-200 min-w-[600px] xl:rounded-e-xl max-lg:rounded-b-lg flex flex-col justify-center items-center gap-2 max-[700px]:min-w-[400px] max-[450px]:min-w-[90%]"
            onSubmit={handleSignup}
          >
            <div
              className={`w-[100%] h-[60%] flex justify-center items-center flex-col gap-2 ${
                signup ? "hidden" : "flex"
              }`}
            >
              <input
                type="text"
                placeholder="Username"
                className="w-[60%] h-[50px] px-3 rounded-lg max-[700px]:min-w-[80%]"
                ref={suname}
              />
              <input
                type="email"
                placeholder="kosul@nike.com"
                className="w-[60%] h-[50px] px-3 rounded-lg max-[700px]:min-w-[80%]"
                ref={spwd}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-[60%] h-[50px] px-3 rounded-lg max-[700px]:min-w-[80%]"
                ref={scpwd}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-[60%] h-[50px] px-3 rounded-lg max-[700px]:min-w-[80%]"
                ref={semail}
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
      {/* After Login part */}
      <section
        className={`flex flex-col bg-black w-full h-screen
          ${logged ? "flex" : "hidden"} justify-center items-center`}
      >
        <UserDashboard userdata={udata} setLogged={setLogged} />
      </section>
    </>
  );
};

export default Login;
