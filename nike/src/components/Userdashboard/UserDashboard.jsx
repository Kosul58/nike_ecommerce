import React from "react";
import { useState } from "react";

const UserDashboard = ({ userdata, setLogged }) => {
  const [dslider, setdslider] = useState("un");

  const dashboradSlide = (val) => {
    setdslider(val);
    if (val == "lo") {
      setLogged(false);
    }
  };
  return (
    <>
      <div className="mt-8 w-[90vw] h-[80vh] bg-gray-950 shadow-[0_0_50px_rgba(200,200,200,0.5)] rounded-xl flex items-center justify-center gap-4">
        <aside className="w-[20%] h-[90%] bg-gray-700 rounded-lg flex justify-center items-center">
          <ul className="w-[85%] h-[90%] flex justify-center items-center flex-col gap-3">
            <li className="w-[100%] h-[60px] text-center text-2xl text-white">
              {userdata}
            </li>
            <li
              className="w-[100%] h-[60px] bg-slate-200 rounded-md cursor-pointer flex items-center justify-center text-lg hover:bg-blue-400"
              onClick={() => dashboradSlide("to")}
            >
              Track Order
            </li>
            <li
              className="w-[100%] h-[60px] bg-slate-200 rounded-md cursor-pointer  flex items-center justify-center text-lg hover:bg-blue-400"
              onClick={() => dashboradSlide("oh")}
            >
              Order History
            </li>
            <li
              className="w-[100%] h-[60px] bg-slate-200 rounded-md cursor-pointer  flex items-center justify-center text-lg hover:bg-blue-400"
              onClick={() => dashboradSlide("ui")}
            >
              User Info
            </li>
            <li
              className="w-[100%] h-[60px] bg-slate-200 rounded-md cursor-pointer  flex items-center justify-center text-lg hover:bg-red-400"
              onClick={() => dashboradSlide("lo")}
            >
              Log Out
            </li>
          </ul>
        </aside>
        <main className="w-[75%] h-[90%] bg-slate-800 rounded-lg">
          {dslider == "to" ? (
            <div className=" w-[100%] h-[100%] flex justify-center items-center flex-col overflow-y-auto gap-4">
              <div className="w-[90%] min-h-[90px] bg-indigo-100 rounded-xl flex items-center justify-evenly cursor-pointer hover:scale-105">
                <h1>Order Number: 20121514Hjd</h1>
                <h1>Amount : $200</h1>
                <h1>
                  Payment: <span className="text-red-500">Pending</span>
                </h1>
                <h1>Delivery Status: On Way</h1>
              </div>
            </div>
          ) : dslider == "oh" ? (
            <div className=" w-[100%] h-[100%] flex justify-center items-center flex-col overflow-y-auto gap-4">
              <div className="w-[90%] min-h-[90px] bg-indigo-100 rounded-xl flex items-center justify-evenly cursor-pointer hover:scale-105 ">
                <h1>Order Number: 20181514gfe</h1>
                <h1>Amount : $200</h1>
                <h1>Date: 2025-03-12</h1>
                <h1>
                  Delivery Status:{" "}
                  <span className="text-green-500">Succesfull</span>
                </h1>
              </div>
            </div>
          ) : dslider == "ui" ? (
            <div className=" w-[100%] h-[100%] gap-4 px-8 flex flex-col items-center justify-center py-8 text-white text-2xl">
              <h1>Username: kasperkai</h1>
              <h2>Age: 22</h2>
              <h1>Email: kasper@kai</h1>
              <h1>Address: Matepani, Pokhara</h1>
            </div>
          ) : (
            <h1>This is username part</h1>
          )}
        </main>
      </div>
      ;
    </>
  );
};

export default UserDashboard;
