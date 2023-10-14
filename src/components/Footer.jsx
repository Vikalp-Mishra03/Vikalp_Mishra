import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import me from '../assets/me-removebgg.png'
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Vikalp Mishra</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/vikalp-mishra" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/vikalp_003/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Vikalp-Mishra03" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </div>
  );
};

export default Footer;
