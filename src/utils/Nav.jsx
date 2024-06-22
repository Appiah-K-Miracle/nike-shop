import { useState } from "react";
import { hamburger, close } from "../assets/icons";
// import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <span className="m-0   text-white text-[2.5rem] font-palanquin font-bold ">
            Nike<span className="text-coral-red">Express</span>
          </span>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 text-white border rounded-full border-coral-red mx-4 py-2 px-4 ">
          <a href="/">Sign in</a>
        </div>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden bg-white py-2 px-4 rounded-full wide:mr-24 text-black boxShadow">
          <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block">
          <img
            src={toggle ? close : hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "block"
            } p-6 bg-black absolute top-20 right-0 mx-4 my-2 z-50 min-w-[180px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end  items-start flex-1 flex-col gap-4">
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className={`font-poppins font-medium cursor-pointer text-[16px] text-white`}
                >
                  <a href={`#${item.href}`}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex-1 flex-col text-lg text-black px-10 py-2 mt-3 leading-normal font-medium font-montserrat max-lg:block wide:mr-24 bg-white rounded-full">
              <a href="/">Sign in</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
