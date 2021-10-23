import express from "express";
export const router = express.Router();
import Dog from "./Dog.js";

const getAllDogs = async (req, res) => {
  //empty object provides all
  const dogs = await Dog.find({});
  res.json(dogs);
};
router.route("/allDogs").get(getAllDogs);

const getDogByID = async (req, res) => {
  const dog = await Dog.findById(req.params.id);

  if (dog) {
    res.json(dog);
  } else {
    res.status(404);
    throw new Error("Dog Not Found");
  }
};
router.route("/:id").get(getDogByID);

export default router;
