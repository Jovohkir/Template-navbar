import React from "react";
import About from "./about/About";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import Search from "./search/Search";
import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <Blog />
          </li>
          <li>
            <Contact />
          </li>
          <li>
            <About />
          </li>
          <li>
            <SignIn />
          </li>
          <li>
            <SignUp />
          </li>

          <li>
            <Search />
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
