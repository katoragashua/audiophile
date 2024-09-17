import React, { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    title: "home",
    link: "/",
  },
  {
    id: 2,
    title: "headphones",
    link: "/headphones",
  },

  {
    id: 3,
    title: "speakers",
    link: "/speakers",
  },
  {
    id: 4,
    title: "earphones",
    link: "/earphones",
  },
];

const Nav = () => {
  const { viewport } = useContext(Context);
  return viewport !== "desktop" ? (
    <nav className="nav absolute top-full z-50 w-full left-0 bg-black h-[100vh] hidden">
      <ul className="flex flex-col bottom-0 gap-28 items-center py-28">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.link} className="links">
              <span className="sub-title">{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  ) : (
    <nav className="nav">
      <ul className="flex items-center gap-12 justify-between">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.link} className="links">
              <span className="sub-title">{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
