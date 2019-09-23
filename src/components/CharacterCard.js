import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const CardBase = styled.div`
    display: block;    
`;

const Card = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-auto-rows: auto;
        grid-gap: 20px;
        grid-auto-flow: row;
        justify-content: center;
        align-items: center;
        margin: 0 2rem;
        list-style: none;
        box-shadow: 2px 2px 4px grey;
        background-color: wheat;
        margin: 2.5%;
        padding-top: 1rem;
`;
const Cimg = styled.img`
    width: 200px;
    height: 200px;
    padding: 1rem;
`;

function CharacterCard(props) {
    console.log(props);
    return(
        <CardBase >
            <NavLink className='navLink' exact to={`/character/${props.id}`}>
                <Card >
                    <Cimg src={props.image} alt={props.name} />
                    <h1>Name: {props.name}</h1>
                    <p>Gender: {props.gender}</p>
                    <p>Status: {props.status}</p>
                    <p>Species: {props.species}</p>
                </Card>
            </NavLink>
        </CardBase>
    );
}
export default CharacterCard