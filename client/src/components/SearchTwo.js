import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import * as palette from '../constants/palette';
import boyDog from '../images/boyDog.svg';
import girlDog from '../images/girlDog.svg';

const HeadlineContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 15px 0;

    h2 {
        color: ${palette.PURPLE};
        font-family: "Gochi Hand", cursive;
        font-size: 36px;
    }
`;

const TileContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const MaleTile = styled.div`
    height: 150px;
    width: 150px;
    background-image: url(${boyDog});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border: 3px solid ${palette.DOG_BLUE};
    border-radius: 25px;
    cursor: pointer;
    margin-right: 7.5px;

    &:hover {
        border: 5px solid ${palette.DOG_BLUE};
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;

const FemaleTile = styled.div`
    height: 150px;
    width: 150px;
    background-image: url(${girlDog});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border: 3px solid ${palette.PINK};
    border-radius: 25px;
    cursor: pointer;
    margin-left: 7.5px;

    &:hover {
        border: 5px solid ${palette.PINK};
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;

const BreedFormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        display: block;
        margin: 15px auto;
        height: 30px;
        width: 80px;
        border: 2px solid ${palette.PURPLE};
        border-radius: 25px;
        color: ${palette.PURPLE};
        font-size: 14px;
        cursor: pointer;

        &:hover {
            border: 3px solid ${palette.PURPLE};
            box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;   
            font-weight: 700;
        }
    }
    
`;

const BreedDropdown = styled.select`
    border: 2px solid ${palette.PURPLE};
    border-radius: 25px;
    padding: 7px 5px;
    color: ${palette.PURPLE};
    font-size: 14px;
    display: block;
    cursor: pointer;

    &:hover {
        border: 3px solid ${palette.PURPLE};
        box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;   
        font-weight: 700;
    }

`;

const CardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15px;
`;

const SearchTwo = props => {

    // STEP 1A: Set A State for Dogs
    const [dogs, setDogs] = useState([]);
    // STEP 1B: Get Dogs from Props
    useEffect(()=> {
        setDogs(props.dogs);
        //Gender Test
        //setDogs(props.dogs.filter(dog => dog.sex === 'male'));
    },[props]);

    // STEP 2A: Get Gender
    const [gender, setGender] = useState('');
    // STEP 2B: Remove Gender Form
    const [showGenderForm, setShowGenderForm] = useState(true);

    //STEP 3A: Show Breed Form
    const [showBreedForm, setShowBreedForm] = useState(false);
    // STEP 3B-1: Filter Breed by Gender Selected and Pass to Map of Breeds
    const [genderInBreed, setGenderInBreed] = useState([]);
    // STEP 3B-1a: Need to pass filter of gender and breed to final state where cards are shown
    const [filteredArrayForCards, setFilteredArrayForCards] = useState([]);
    // STEP 3B-2: Function to get genderInBreed state
    const handleGenderAndBreed = () => {
        let genderInBreedFilter = dogs.filter(dog => dog.sex === gender);
        // STEP 3B-2a: Remove duplicates
        let cleanedUpBreeds = []
        for (let i = 0; i < genderInBreedFilter.length; i++){
            if (cleanedUpBreeds.includes(genderInBreedFilter[i].breed)) {
                continue;
            } else {
                cleanedUpBreeds.push(genderInBreedFilter[i].breed);
            }
        }
        if (!genderInBreedFilter.length) {
            //TO DO: update error message
            alert('No Dogs of this gender available');
        } else {
            setFilteredArrayForCards(genderInBreedFilter)
            setGenderInBreed(cleanedUpBreeds);
            setShowBreedForm(true);
        };
    }; 
    // STEP 3C: Set Selected Breed
    const [breed, setBreed] = useState('');

    // STEP 4A-1: Filter Remaining Dogs after gender and breed are selected
    const [dogsToShow, setDogsToShow] = useState([]);
    // STEP 4A: Create An Array of Remaining Dogs of Gender/Breed and Display
    const filterRemaining = () => {
        let remainingDogs = filteredArrayForCards.filter(dog => dog.breed === breed);
        setDogsToShow(remainingDogs);
    };    
    // STEP 4B: After selecting breed, hide breed form

    //FUNCTION: "GENDER"
    const handleGenderSubmit = (event) => {
        event.preventDefault();
        setShowGenderForm(false);
        handleGenderAndBreed();
    };

    //FUNCTION: "BREED"
    const handleBreedSubmit = (event) => {
        event.preventDefault();
        filterRemaining();
        setShowBreedForm(!showBreedForm)
    }

    return (
        <>
    
            {
                showGenderForm &&
                <>
                    <HeadlineContainer>
                        <h2>Select Dog's Gender</h2>
                    </HeadlineContainer>
                    {/* NOTE: clicking a tile will trigger onSubmit */}
                    <form onSubmit={handleGenderSubmit}>
                        <TileContainer>
                            <MaleTile 
                                as='button'
                                value='male'
                                onClick={event => setGender(event.target.value)}
                            />
                            <FemaleTile 
                                as='button'
                                value='female'
                                onClick={event => setGender(event.target.value)}
                            />     
                        </TileContainer>           
                    </form>
                </>
            }

            {
                showBreedForm &&               
                    <>
                        <HeadlineContainer>
                            <h2>Select a {gender} among these breeds</h2>
                        </HeadlineContainer>
                            <BreedFormContainer>
                            <form onSubmit={handleBreedSubmit}>
                                 <BreedDropdown onChange={(e) => setBreed(e.target.value)}>
                                    <option disabled selected>
                                        Select a Breed
                                    </option>
                                        {genderInBreed.map((item, i)=> (
                                        <option key={i} value={item}>{item}
                                    </option>))}
                                </BreedDropdown>
                                <button type="submit">Submit</button>
                            </form>
                            </BreedFormContainer>
                    </>
            }

            <CardContainer>
            {
             
                dogsToShow !== [] &&
                dogsToShow.map((item, i) => (
                    <Card key={i} 
                        image={item.image._meta.url}
                        name={item.name}
                        age={item.birthDay ? `born ${item.birthDay}` : `approximately ${item.ageGuessMonths} months`}
                        weight={item.weightPounds}
                        disability={item.disability ? item.disability : ""}
                        rescue={item.rescue ? 'yes' : ""}
                        kidFriendly={item.kidFriendly ? "yes" : "no"}
                        catFriendly={item.catFriendly ? "yes" : "no"}
                        onlyDog={item.only ? "no" : "gets along with other dogs!"}
                        houseTrained={item.houseTrained ? "yes" : "needs some help!"}
                        leashTrained={item.leashTrained ? "yes" : "needs some help!"}
                        inFoster={item.inFoster ? "yes" : ""}
                        notes={item.notes ? item.notes : ""}
                    />                    
                ))
              
            }
            </CardContainer>
        </>
    )
}

export default SearchTwo
