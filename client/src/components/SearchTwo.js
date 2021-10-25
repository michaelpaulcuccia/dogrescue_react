import React, { useState, useEffect } from 'react';

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
        }
    }; 
    // STEP 3C: Set Selected Breed
    const [breed, setBreed] = useState('');

    // STEP 4A-1: Filter Remaining Dogs after gender and breed are selected
    const [dogsToShow, setDogsToShow] = useState([]);
    // STEP 4A: Create An Array of Remaining Dogs of Gender/Breed and Display
    const filterRemaining = () => {
        let remainingDogs = genderInBreed.filter(dog => dog.breed === breed);
        setDogsToShow(remainingDogs);
    }
    

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
                <h2>Select Dog's Gender</h2>
                <form onSubmit={handleGenderSubmit}>
                    <label>Male</label>
                    <input type='radio' id='male' name='male' value='male' onChange={event => setGender(event.target.value)}/>
                    <label>Female</label>
                    <input type='radio' id='female' name='female' value='female' onChange={event => setGender(event.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
                </>
            }

            {
                showBreedForm &&               
                    <>
                        <h2>Select a {gender} among these breeds</h2>
                            <form onSubmit={handleBreedSubmit}>
                                 <select onChange={(e) => setBreed(e.target.value)}>
                                    <option disabled selected>
                                        Select a Breed
                                    </option>
                                        {genderInBreed.map((item, i)=> (
                                        <option key={i} value={item.breed}>{item.breed}
                                    </option>))}
                                </select>
                                <button type="submit">Submit</button>
                            </form>
                    </>
            }

            {
                dogsToShow !== [] &&
                dogsToShow.map((item, i) => (
                    <div key={i}>
                        <p>Name: {item.name}</p>
                        <img src={item.image._meta.url} alt={item.name} />
                    </div>
                ))
            }
        </>
    )
}

export default SearchTwo
