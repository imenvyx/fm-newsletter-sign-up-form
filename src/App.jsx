import { useState, useEffect } from "react";
import Modal from "./components/Modal";

//Images
import ImgDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import IconList from "./assets/images/icon-list.svg";
import Notification from "./components/Notification";
import ImgMobile from "./assets/images/illustration-sign-up-mobile.svg";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let newImageUrl;
      if (screenWidth >= 480) {
        newImageUrl = ImgDesktop;
      } else {
        newImageUrl = ImgMobile;
      }
      setImageUrl(newImageUrl);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleOnSubmit(e) {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Valid email required");
    } else {
      setError("");
      setShowModal(true);
    }
  }

  return (
    <div className="m-0 p-0 ">
      <div className="w-full h-screen bg-charcoal-grey flex sm:justify-center sm:items-center">
        <form
          className="bg-white flex flex-col-reverse h-full  sm:flex-row  sm:w-[840px] sm:h-[65%] sm:rounded-[30px]  sm:p-4"
          onSubmit={(e) => {
            console.log("object");
            handleOnSubmit(e);
          }}
          noValidate
        >
          <div className="flex-[0%] flex flex-col sm:flex-[50%]  justify-center px-10">
            <h2 className="color-dark-slate-grey text-[3rem] font-[700] m-0 mb-6 leading-none">
              {" "}
              Stay updated!
            </h2>
            <p className="text-[16px] mb-8">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="text-[14px] mb-8">
              <li className="flex mb-2">
                <img alt="" src={IconList} className="inline-block mr-4 mb-1" />
                <p>Product discovery and building what matters </p>
              </li>
              <li className="flex mb-2">
                <img alt="" src={IconList} className="inline-block mr-4 mb-1" />
                <p>And much more!</p>
              </li>
              <li className="flex mb-2">
                <img alt="" src={IconList} className="inline-block mr-4 mb-1" />
                <p> Measuring to ensure updates are a success</p>
              </li>
            </ul>
            <div className="mb-5 relative flex flex-col">
              <label htmlFor="email" className=" text-[10px] font-[700] mb-2">
                Email address
              </label>
              {error ? (
                <span className=" text-[10px] font-[500] text-red-600 absolute right-0">
                  {" "}
                  {error}
                </span>
              ) : null}
              <input
                id="email"
                type="email"
                name="email"
                className={`block w-full rounded-md text-[12px] px-5 cursor-pointer   border-gray-200 ${
                  error
                    ? "focus: text-red-500/90 focus: border-red-900/60  focus:ring-0 bg-red-100"
                    : "focus:text-black/80 focus:border-grey  focus:ring-0"
                }`}
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
              className="text-white text-[14px] rounded-md h-[50px]   bg-dark-slate-grey hover:bg-gradient-to-r hover:from-pink-500 hover:to-tomato hover:shadow-xl hover:shadow-tomato/40 transition"
            >
              Subscribe to monthly newsletter
            </button>
          </div>
          <div className="flex-none h-auto sm:h-full sm:flex-[50%]">
            <img
              className="w-full h-auto sm:h-full object-cover sm:rounded-[20px]"
              alt=""
              src={imageUrl ? imageUrl : ""}
            />
          </div>
        </form>
      </div>
      {showModal ? (
        <Modal>
          <Notification email={email} setShowModal={setShowModal} />
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
