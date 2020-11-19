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
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Nav = styled.nav`
  flex: 0 0 250px;
  cursor: pointer;
`;

const Ol = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0.5em 0;
  color: inherit;
  background: inherit;
  font-family: inherit;
  cursor: pointer;
  
  & > li {
    position: relative;
    padding: 0.5em;
  }

  & > li > span:hover,
  & > li > span:focus {
    color: rgb(29, 161, 242);
    background: rgba(29, 161, 242, 30%);
    border-radius: 50vh;
  }
  
  & > li > span {
    padding: 0.5em;
  }
`;

const SideNav: FC = () => (
  <Nav>
    <FontAwesomeIcon icon={faTwitter} fixedWidth />
    <Ol>
        <li><span><FontAwesomeIcon icon={faHome} fixedWidth /> Home</span></li>
        <li><span><FontAwesomeIcon icon={faHashtag} fixedWidth /> Explore</span></li>
        <li><span><FontAwesomeIcon icon={faBell} fixedWidth /> Notification</span></li>
        <li><span><FontAwesomeIcon icon={faEnvelope} fixedWidth /> Messages</span></li>
        <li><span><FontAwesomeIcon icon={faBookmark} fixedWidth /> Bookmarks</span></li>
        <li><span><FontAwesomeIcon icon={faClipboardList} fixedWidth /> Lists</span></li>
        <li><span><FontAwesomeIcon icon={faUser} fixedWidth /> Profile</span></li>
        <li><span><FontAwesomeIcon icon={faEllipsisH} fixedWidth /> More</span></li>
    </Ol>
  </Nav>
);

export default SideNav;
