import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-envelope";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>© Shaina Morales| Portfolio</span>
        <div className="f-icons">
          
          <a href="mailto:shainamorales2020@gmail.com"><Insta color="white" size={"3rem"} alt=""/></a>
          <a href="https://www.facebook.com/profile.php?id=100082992630910"><Facebook color="white" size={"3rem"} alt=""/></a>
          <a href=""><Gitub color="white" size={"3rem"} alt=""/></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
