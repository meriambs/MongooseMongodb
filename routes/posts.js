 const express= require('express');
const router = express.Router();
 const Post = require('../model/posts')

// /// Create and Save a Record of a Model::

router.post("/create", (req, res) => {
  const { name, age, favoriteFoods } = req.body;
  const newPerson = new Person({ name, age, favoriteFoods });
  newPerson
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ msg: err }));
});

//Create Many Records with model.create():

router.post("/createMany", (req, res) => {
  let arrayOfPeople = req.body;
  Person.create(arrayOfPeople)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
//Use Find mopdel() to Search in the data base:
router.get("/findName/:name", (req, res) => {
  Person.find({ name: req.params.name })
    .then((person) => res.json(person))
    .catch((err) => res.json({ msg: err }));
});

//Use model.findOne() to Return a Single Matching Document from Your Database:
router.get("/Food", async (req, res) => {
  const food = req.body.favoriteFoods;
  Person.findOne({ favoriteFoods: { $all: food } })
    .then((person) => res.json(person))
    .catch((err) => res.json({ msg: err }));
});
//Use model.findById() to Search Your Database By _id:
router.get("/findId/:id", (req, res) => {
  person = Person.findById(req.params.id)
    .then((person) => res.json(person))
    .catch((err) => res.json({ msg: err }));
});
//Perform Classic Updates by Running Find, Edit, then Save:
router.put("/finEdiSave/:id", (req, res) => {
  Person.findById(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      data.favoriteFoods.push("strowberycake"),
        data.save((err, person) => {
          err ? res.json(err) : res.json(person);
        });
    }
  });
});
//Perform New Updates on a Document Using model.findOneAndUpdate()
router.put("/findOneAndUpdate/:name", (req, res) => {
  Person.findOneAndUpdate(
    { name: req.params.name },
    { $set: { age: 20 } },
    { new: true }
  )
    .then((person) => res.json(person))
    .catch((err) => res.json(err));
});
//Delete One Document Using model.findByIdAndRemove:
router.delete("/findIdAndRemove/:id", (req, res) => {
  Person.findByIdAndRemove(req.params.id)
    .then((person) => res.json(person))
    .catch((err) => res.json(err));
});
//MongoDB and Mongoose - Delete Many Documents with model.remove():
router.delete("/findAndRemove", (req, res) => {
  Person.remove({ name: "Mary" })
    .then((person) => res.json(person))
    .catch((err) => res.json(err));
});
//Chain Search Query Helpers to Narrow Search Results:
router.get("/queryChain", (req, res) => {
  Person.find({ favoriteFoods: { $all: ["burrito"] } })
    .sort({ name: "asc" })
    .limit(2)
    .select("-age")
    .exec((err, data) => {
      err ? res.json(err) : res.json(data);
    });
});
module.exports = router;
