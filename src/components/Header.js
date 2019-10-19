import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
display: flex;
justify-content: space-around;
width: 75%;
margin-bottom: 1em;
background: #EAEAEA;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Nav>
        <Link to='/CharacterList'>Characters</Link>
        <Link to='/SearchForm'>Search</Link>
        <Link to='/WelcomePage'>Home</Link>
      </Nav>
    </header>
  );
}
