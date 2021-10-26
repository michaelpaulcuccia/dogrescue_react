import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as palette from '../constants/palette';
import boyDog from '../images/boyDog.svg';
import girlDog from '../images/girlDog.svg';

//TO DO: 1. after selecting breed, hide breed form, 2. style dog display cards

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
    // STEP 3B-2: Function to get genderInBreed state
    const handleGenderAndBreed = () => {
        let genderInBreedFilter = dogs.filter(dog => dog.sex === gender);
        console.log(genderInBreed)
        if (!genderInBreedFilter.length) {
            //TO DO: update error message
            alert('No Dogs of this gender available');
        } else {
            setGenderInBreed(genderInBreedFilter);
            setShowBreedForm(true);
        };
    }; 
    // STEP 3C: Set Selected Breed
    const [breed, setBreed] = useState('');

    // STEP 4A-1: Filter Remaining Dogs after gender and breed are selected
    const [dogsToShow, setDogsToShow] = useState([]);
    // STEP 4A: Create An Array of Remaining Dogs of Gender/Breed and Display
    const filterRemaining = () => {
        let remainingDogs = genderInBreed.filter(dog => dog.breed === breed);
        setDogsToShow(remainingDogs);
    };    

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
                                        <option key={i} value={item.breed}>{item.breed}
                                    </option>))}
                                </BreedDropdown>
                                <button type="submit">Submit</button>
                            </form>
                            </BreedFormContainer>
                    </>
            }

            {
                dogsToShow !== [] &&
                dogsToShow.map((item, i) => (
                    <div key={i}>
                        <p>Name: {item.name}</p>
                        <img src={item.image._meta.url} alt={item.name} style={{height: '100px', width: '100px'}}/>
                    </div>
                ))
            }

        </>
    )
}

export default SearchTwo
