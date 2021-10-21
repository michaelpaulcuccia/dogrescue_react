import express from 'express';
export const router = express.Router();
import Dog from './Dog.js';

const getAllDogs = async (req, res) => {

    //empty object provides all
    const dogs = await Dog.find({});
    res.json(dogs);

}
router.route('/allDogs').get(getAllDogs);

export default router;