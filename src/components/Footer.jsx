import React from "react";
import { Link } from "react-router-dom";
import audiophile from "../assets/audiophile.svg";

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

const socials = [
  {
    id: 1,
    title: "facebook",
    url: "https://www.facebook.com",
    img: "/src/assets/shared/desktop/icon-facebook.svg",
  },
  {
    id: 2,
    title: "twitter",
    url: "https://www.twitter.com",
    img: "/src/assets/shared/desktop/icon-twitter.svg",
  },
  {
    id: 3,
    title: "instagram",
    url: "https://www.instagram.com",
    img: "/src/assets/shared/desktop/icon-instagram.svg",
  },
];

const Footer = () => {
  return (
    <footer className="footer bg-black text-snow relative">
      <div className="container pt-16 pb-12 flex flex-col gap-8 relative">
        <div className="flex flex-col items-center md:items-start justify-between gap-8 xl:flex-row xl:items-center">
          <div className="logo">
            <Link to={"/"}>
              <img src={audiophile} alt="logo" />
            </Link>
          </div>
          <div>
            <ul className="flex flex-col items-center md:items-start md:flex-row gap-8 text-snow">
              {links.map((link) => (
                <li className="sub-title links" key={link.id}>
                  <Link to={link.link}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-12 place-items-center md:place-items-start">
        {/* <div className="flex flex-col justify-between items-end gap-12 xl:flex-row"></div> */}
          <p className="text-center md:text-left font-light col-span-2 xl:col-span-1 order-1">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="  col-span-2  md:justify-self-end md:col-span-1 order-3 self-end xl:order-2">
            <ul className="flex gap-8">
              {socials.map((social) => (
                <li key={social.id} className="hover:animate-pulse">
                  <a href={social.url} target="_blank" rel='noreferrer'>
                    <img src={social.img} alt={social.title} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <small className="pt-4 order-2 col-span-2 md:col-span-1">Copyright {new Date().getFullYear()}. All Rights Reserved</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
