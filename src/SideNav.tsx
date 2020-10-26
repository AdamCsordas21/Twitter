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
  flex: 0 0 200px;
`

const Ol = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0.5em 0;

  & > li {
    position: relative;
  }
`

const SideNav: FC = () => (
  <Nav>
    <FontAwesomeIcon icon={faTwitter} fixedWidth />
    <Ol>
        <li><FontAwesomeIcon icon={faHome} fixedWidth /> Home</li>
        <li><FontAwesomeIcon icon={faHashtag} fixedWidth /> Explore</li>
        <li><FontAwesomeIcon icon={faBell} fixedWidth /> Notification</li>
        <li><FontAwesomeIcon icon={faEnvelope} fixedWidth /> Messages</li>
        <li><FontAwesomeIcon icon={faBookmark} fixedWidth /> Bookmarks</li>
        <li><FontAwesomeIcon icon={faClipboardList} fixedWidth /> Lists</li>
        <li><FontAwesomeIcon icon={faUser} fixedWidth /> Profile</li>
        <li><FontAwesomeIcon icon={faEllipsisH} fixedWidth /> More</li>
    </Ol>
  </Nav>
);

export default SideNav;
