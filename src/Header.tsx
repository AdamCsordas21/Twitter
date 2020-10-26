import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header>
      <FontAwesomeIcon icon={faTwitter} /> Home
    </header>
  );
};

export default Header;
