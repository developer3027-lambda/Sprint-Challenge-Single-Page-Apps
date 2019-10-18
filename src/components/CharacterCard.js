import React from "react";
import styled from 'styled-components';

const CharImg = styled.img`
    width: 200px;
    height: 200px;
    border: 2px solid #888888;
    padding: 1rem;
`;

export default function CharacterCard(props) {
  console.log(props);
  return (
    <div>
      <div>
        <h1>Character Name: {props.name}</h1>
        <CharImg src={props.image}></CharImg>
      </div>
    </div>
  );
}
