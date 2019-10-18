import React from "react";

export default function CharacterCard(props) {
  console.log(props);
  return (
    <div>
      <div>
        <h1>Character Name: {props.name}</h1>
        <img src={props.image}></img>
      </div>
    </div>
  );
}
