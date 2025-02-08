import React from "react";
import "./NavigationBar.css";
import { IoIosHome, IoMdContact } from "react-icons/io";
import { FaInfo, FaSuitcase, FaFolderOpen, FaLaptop } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

const Menus = ({ toggle }) => {
  const navItems = [
    { icon: <IoIosHome title="Home" />, label: "Home" },
    { icon: <FaInfo title="About" />, label: "About" },
    { icon: <FaFolderOpen title="Projects" />, label: "Projects" },
    { icon: <FaSuitcase title="Work Experience" />, label: "Work Experience" },
    { icon: <FaLaptop title="Tech Stack" />, label: "Tech Stack" },
    { icon: <HiAcademicCap title="Education" />, label: "Education" },
    { icon: <IoMdContact title="Contact me" />, label: "Contact me" },
  ];

  return (
    <>
      {toggle && (
        <div className="navbar-profile-pic">
          <img src="fofo.jpeg" alt="profile pic" />
        </div>
      )}

      <div className="nav-items">
        {navItems.map((item, index) => (
          <div key={index} className="nav-item">
            <div className="nav-link">
              {item.icon}
              {toggle && <span>{item.label}</span>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menus;
