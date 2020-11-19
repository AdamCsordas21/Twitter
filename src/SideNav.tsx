import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faClipboardList,
  faUser,
  faEllipsisH,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Nav = styled.nav`
  flex: 0 0 200px;
`;

const Ol = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0.5em 0;
  font-size: 1.2rem;
  font-weight: 700;

  & > li {
    position: relative;
    padding: 0.8em 0;
  }

  & > li > span:hover,
  & > li > span:focus {
    color: rgb(29, 161, 242);
    background: rgba(29, 161, 242, 30%);
    border-radius: 50vh;
  }

  & > li > span {
    padding: 0.4em;

    & > span {
      padding: 0 0.8rem;
    }
  }
`;

const TwitterHomeLogoStyled = styled.div`
  padding: 0.5em 0 0;
  font-size: 1.4rem;
  font-weight: 700;

  & > span {
    padding: 0.4em;
  }

  & > span:hover,
  & > span:focus {
    background: rgba(29, 161, 242, 30%);
    border-radius: 50vh;
  }
`;

const TwitterHomeLogo = () => (
  <TwitterHomeLogoStyled>
    <span>
      <FontAwesomeIcon icon={faTwitter} fixedWidth />
    </span>
  </TwitterHomeLogoStyled>
);

interface NavItemProps {
  icon: IconDefinition;
  text: string;
}

const NavItem: FC<NavItemProps> = ({ icon, text }) => (
  <li>
    <span>
      <FontAwesomeIcon icon={icon} fixedWidth /> <span>{text}</span>
    </span>
  </li>
);

const SideNav: FC = () => (
  <Nav>
    <TwitterHomeLogo />
    <Ol>
      <NavItem icon={faHome} text="Home" />
      <NavItem icon={faHashtag} text="Explore" />
      <NavItem icon={faBell} text="Notification" />
      <NavItem icon={faEnvelope} text="Messages" />
      <NavItem icon={faBookmark} text="Bookmarks" />
      <NavItem icon={faClipboardList} text="Lists" />
      <NavItem icon={faUser} text="Profile" />
      <NavItem icon={faEllipsisH} text="More" />
    </Ol>
  </Nav>
);

export default SideNav;
