import ImgDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import IconList from "./assets/images/icon-list.svg";
import { useState } from "react";
function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Valid email required");
      console.log(error);
    } else {
      setError("");
    }
  }

  return (
    <div className="m-0 p-0 ">
      <div className="w-full h-screen bg-charcoal-grey flex justify-center items-center">
        <form
          className="w-[840px] h-[65%] rounded-[30px] bg-white flex p-4"
          onSubmit={(e) => {
            console.log("object");
            handleOnSubmit(e);
          }}
          noValidate
        >
          <div className="flex-[50%] flex flex-col justify-center px-10">
            <h2 className="color-dark-slate-grey text-[3rem] font-[700] m-0 mb-4">
              {" "}
              Stay updated!
            </h2>
            <p className="text-[16px] mb-8">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="text-[14px] mb-8">
              <li>
                <img alt="" src={IconList} className="inline-block mr-4 mb-1" />
                Product discovery and building what matters
              </li>
              <li>
                <img alt="" src={IconList} className="inline-block mr-4 mb-1" />
                And much more!
              </li>
              <li>
                <img alt="" src={IconList} className="inline-block mr-4 mb-1" />
                Measuring to ensure updates are a success
              </li>
            </ul>
            <div className="mb-5 relative">
              <label htmlFor="email" className=" text-[10px] font-[700] ">
                Email address
              </label>
              {error ? (
                <span className=" text-[10px] font-[700] text-red-600 absolute r"> {error}</span>
              ) : null}
              <input
                id="email"
                type="email"
                name="email"
                className="block w-full rounded-md text-[12px] px-5 cursor-pointer  border-gray-200  focus:text-grey focus:border-grey  focus:ring-0"
                placeholder="email@company.com"
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }}
                onBlur={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              id="submit"
              type="submit"
              className="text-white text-[14px] rounded-md h-[50px]   bg-dark-slate-grey hover:bg-gradient-to-r hover:from-pink-500 hover:to-tomato hover:shadow-xl hover:shadow-tomato/40 "
            >
              Subscribe to monthly newsletter
            </button>
          </div>
          <div className="flex-[50%]">
            <img
              className="w-full h-full aspect-video"
              alt=""
              src={ImgDesktop}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
