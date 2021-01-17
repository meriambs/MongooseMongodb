const Person = require('../Models/Person');

//GET :  RETURN ALL USERS :

const findUsers= async(res,req)=>{
    const returnUser = await Person.find({name:req.parms.name});
    return res.send(returnUser)
}


// POST :  ADD A NEW USER TO THE DATABASE :

const createUser = async (req, res) => {
    console.log('req.body',req.body)
const persons = new Person(req.body);
const t = await persons.save()

return res.send(t)
}


   //PUT : EDIT A USER BY ID 
const findandUpdate = async ( req , res)=>{
const updatedPerson = await Person.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
return res.send(updatedPerson)
}


  //   DELETE : REMOVE A USER BY ID 
  const deleteUser = async (req,res)=>{
    const deltedPerson = await Person.findByIdAndRemove({_id:req.params.id});
    return res.send(deltedPerson)
}
module.exports = {
    findUsers,
   createUser,
    findandUpdate,
    deleteUser
}