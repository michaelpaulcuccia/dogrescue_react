import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card'

const CardWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;

    @media(max-width: 1030px) {
        grid-template-columns: 1fr 1fr;
    }

    @media(max-width: 950px) {
        grid-template-columns: 1fr;
    }
  
   
`;

const AllDogs = ({ dogs }) => {
 

    return (
        <>
                <CardWrapper>
                {dogs !== [] &&
                    dogs.map((item, i) => (
                    <Card
                        key={i}
                        image={item.image._meta.url}
                        name={item.name}
                        age={
                            item.birthDay
                            ? `born ${item.birthDay}`
                            : `approximately ${item.ageGuessMonths} months`
                        }
                        weight={item.weightPounds}
                        disability={item.disability ? item.disability : ""}
                        rescue={item.rescue ? "yes" : ""}
                        kidFriendly={item.kidFriendly ? "yes" : "no"}
                        catFriendly={item.catFriendly ? "yes" : "no"}
                        onlyDog={item.only ? "no" : "gets along with other dogs!"}
                        houseTrained={item.houseTrained ? "yes" : "needs some help!"}
                        leashTrained={item.leashTrained ? "yes" : "needs some help!"}
                        inFoster={item.inFoster ? "yes" : ""}
                        notes={item.notes ? item.notes : ""}
                        />
                    ))}
                </CardWrapper>
        </>
    )
}

export default AllDogs
