import React, { FC } from "react";
import styled from "styled-components";

const Home = styled.header`
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 1.3125;
`

const Header: FC = () => <Home>Home</Home>;

export default Header;
