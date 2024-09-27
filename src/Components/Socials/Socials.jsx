import React from "react";
import "../Socials/Style.scss";
import {
  AiFillLinkedin,
  AiOutlineMail,
  AiFillTwitterCircle,
  AiOutlineGithub,
} from "react-icons/ai";

const Socials = () => {
  return (
    <div className="icons">
      <a href="https://github.com/makrem7" target="_blank">
        <AiOutlineGithub style={{ color: "#fff" }} />
      </a>
      <a href="https://twitter.com/ltifi_makrem" target="_blank">
        <AiFillTwitterCircle style={{ color: "#fff" }} />
      </a>
      <a href="https://www.linkedin.com/in/makrem-ltifi" target="_blank">
        <AiFillLinkedin style={{ color: "#fff" }} />
      </a>
      <a href="mailto:makrem.mltifi@gmail.com" target="_blank">
        <AiOutlineMail style={{ color: "#fff" }} />
      </a>
    </div>
  );
};

export default Socials;
