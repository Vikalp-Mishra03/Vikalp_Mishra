import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from '../assets/logo.svg'
const Header = ({ setMenuOpen, menuOpen }) => {
    return (
        <>
            <nav>
                <NavContent setMenuOpen={setMenuOpen} />
            </nav>

            <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
                <AiOutlineMenu />
            </button>
        </>
    );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
            <NavContent setMenuOpen={setMenuOpen} />
        </div>
    );
};

const NavContent = ({ setMenuOpen }) => (
    <>
        <img src={logo} alt="" />
        <h2> Vikalp Mishra</h2>
        <div>
            <a onClick={() => setMenuOpen(false)} href="#home">
                Home
            </a>
            <a onClick={() => setMenuOpen(false)} href="#about">
                About
            </a>
            <a onClick={() => setMenuOpen(false)} href="#work">
                Project
            </a>
            <a onClick={() => setMenuOpen(false)} href="#game">
                Games
            </a>
            <a onClick={() => setMenuOpen(false)} href="#testimonial">
                Testimonial
            </a>
            <a onClick={() => setMenuOpen(false)} href="#contact">
                Contact
            </a>
        </div>
        <a href="mailto:mishravikalp896@gmail.com">
            <button>Email</button>
        </a>
    </>
);

export default Header;
