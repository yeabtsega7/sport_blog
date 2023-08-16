import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCatagories } from "@/Service";

const Header = () => {
  const [categories, setCategories] = useState([]);

  const [isNavOpen, setIsNavOpen] = useState(false);

  var openNav = isNavOpen ? `d-block` : ``;

  useEffect(() => {
    getCatagories().then((value) => setCategories(value));
  }, []);
  return (
    <div className="flex  mb-2 bg-gray-800 ">
      <div className="container mx-auto border-b relative  inline-block border-black py-3">
        <div className="md:float-left block">
          <Link href="/">
            <img className="h-16" src="/logo.png"></img>
          </Link>
        </div>
        <div className="md:hidden absolute z-20 block right-10 top-3 donatMenu">
          <div className="" onClick={() => setIsNavOpen(!isNavOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-white"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className={` hidden ${openNav}  fixed right-4  bg-gray-200 w-48`}
          >
            {categories.map((nav) => {
              return (
                <div
                  className="hover:bg-gray-800 p-2 hover:text-white cursor-pointer"
                  key={nav.name}
                >
                  <Link
                    href={`/category/${nav.slug}`}
                    onClick={() => setIsNavOpen(!isNavOpen)}
                  >
                    {nav.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="md:float-right mt-2 align-middle capitalize hover:bg-gray-300 p-2 rounded-lg text-white hover:text-gray-800 ml-4 font-semibold cursor-pointer"
              >
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
