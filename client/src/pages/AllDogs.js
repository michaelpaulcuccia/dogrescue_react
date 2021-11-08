import React from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import Card from '../components/Card'
import Footer from "../components/Footer";

const CardWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-content: center;
    
`;

const AllDogs = ({ dogs }) => {
 

    return (
        <>
            <Header />
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
            <Footer />
        </>
    )
}

export default AllDogs
