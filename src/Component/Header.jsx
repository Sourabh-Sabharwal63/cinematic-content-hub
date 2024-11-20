import React from "react";
import Images from "./WEBSITE_LOGO.png";
import Profile_pic from "./Venom_Poster.jpg";
import { useDispatch } from "react-redux";
import { changePageStatus } from "./utils/Redux/GPTSlice";
import { Supported_Language } from "./utils/language_Constant";
import { changeLanguage } from "./utils/Redux/GPTSlice";
import { useSelector } from "react-redux";
const Header = () => {
  const Gpt_flag=useSelector(store=>store?.GPTSlice?.pageStatus);
  const dispatch = useDispatch();
  const handleDispatch = () => {
    dispatch(changePageStatus());
  };
  const handleSelect=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="md:absolute w-screen px-1 md:px-8 py2  z-10 flex  flex-col  bg-black sm:bg-transparent  sm:bg-gradient-to-b sm:from-black sm:to-transparent md:flex-row md:justify-between md:bg-transparent md:bg-gradient-to-b md:from-black md:to-transparent ">
      <img className="w-48 h-20  md:w-48 md:h-14 mx-auto  md:mx-0" src={Images} alt="logo" /> 
      <div className="flex justify-between p-0 md:p-2 md:justify-around ">
       
       
        <button
          className=" text-base px-2 py-2 my-1  h-10 md:text-lg  md:px-3 md:mx-4 md:my-2  bg-purple-300 text-white rounded-lg  md:h-12"
          onClick={handleDispatch}
        >
         { !Gpt_flag ? "GPT Search 🔎" : "Home"} 
        </button>
        <div className="flex flex-row">
        {Gpt_flag &&   <select className="md:py-2 my-1 md:px-4 md:mx-4 md:my-3 bg-purple-200  text-black rounded-lg h-10" onChange={handleSelect}>
          {Supported_Language.map((lan) => (
            <option value={lan.identifier}>{lan.name}</option>
          ))}
        </select>}

        <img
          className="h-20 w-15 rounded-full border-2 hidden md:block  border-lime-200"
          src={Profile_pic}
          alt="ProfilePic"
        />
        <button className="font-medium md:font-bold text-red-400 md:h-20 w-15 p-0 md:p-4">
          Sign out{" "}
        </button>

        </div>
       
      </div>
    </div>
  );
};

export default Header;
