import mongoose from 'mongoose'

const DogSchema = new mongoose.Schema({
    name: String,
    breed: String,
    birthDay: String,
    ageGuessMonths: Number,
    weightPounds: Number,
    sex: String,
    image: {
        data: Buffer,
        contentType: String
    },
    disability: Boolean,
    rescue: Boolean, 
    kidFriendly: Boolean,
    catFriendly: Boolean,
    onlyDog: Boolean,
    houseTrained: Boolean,
    leashTrained: Boolean,
    inFoster: Boolean,
    featureDog: Boolean,
    successDog: Boolean,
    notes: String
});

const Dog = mongoose.model('dog', DogSchema);

export default Dog;