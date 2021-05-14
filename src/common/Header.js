import * as React from "react"
import styled from 'styled-components';
import Navbar from './../common/Navbar';

const Header = (props) => (
  <StyledHeader>
    <Navbar />
    {props.children}
  </StyledHeader>
)

export default Header;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
`;
