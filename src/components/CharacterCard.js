import React from "react";
import styled from 'styled-components';

const CharImg = styled.img`
    width: 200px;
    height: 200px;
    border: 2px solid #888888;
    padding: .5rem;
    margin: 1rem;
`;
const Card = styled.div`
  display: flex;
  background: plum;
  padding: 1em;
  width: 50%;
  border-radius: 5px;
  margin: 1rem;
`;
const ImgBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const InfoBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: flex-start;
  flex-direction: column;
`;
const InfoText = styled.p`
padding-left: .5rem;
`;


export default function CharacterCard(props) {
  console.log(props);
  return (
    <Card>
      <ImgBox>
        <CharImg src={props.image}></CharImg>
      </ImgBox>
      <InfoBox>
      <InfoText>Character Name: {props.name}</InfoText>
      <InfoText>Gender: {props.gender}</InfoText>
      <InfoText>Species: {props.species}</InfoText>
      <InfoText>Status: {props.status}</InfoText>
      </InfoBox>
    </Card>
  );
}
