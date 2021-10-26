import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 10px;
    width: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 25px;
    border: 2px solid black;  
    font-family: "Gochi Hand", cursive;
    margin-left: 7.5px;
    margin-right: 7.5px;

    img {
        margin-bottom: 5px;
        height: 200px;
        width: 225px;
    }

    h2 {
        font-size: 30px;
    }
`;

const Card = props => {

    return (
        <Container>
            <img src={props.image} alt={props.name}/>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Weight: {props.weight}lbs.</p>
            {props.disability !== "" ? <p>Disability: {props.disability}</p> : null}
            {props.rescue !== "" ? <p>Rescue: {props.rescue}</p> : null}
           <p>Kid Friendly: {props.kidFriendly}</p>
           <p>Cat Friendly: {props.catFriendly}</p>
           <p>Dog Friendly: {props.onlyDog}</p>
           <p>House Trained: {props.houseTrained}</p>
           <p>Leash Trained: {props.leashTrained}</p>
           {props.inFoster !== "" ? <p>Currently in Foster: {props.inFoster}</p> : null}
           {props.notes !== "" ? <p>Notes: {props.notes}</p> : null}
        </Container>
    )
}

export default Card
