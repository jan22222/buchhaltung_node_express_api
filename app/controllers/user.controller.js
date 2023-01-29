const User =require( "../models/user.model.js");
// import Role from "./role.controller.js"



 const getUsers = async (req, res) => {
	//Über die id role finden, dann Fallunterscheidung
  const userId = req.UserId
	const Role = req.userRole

	if (Role!="admin"){
	try {
			const coWorkers = await User.findById(userId).populate({
        path: "coworkers",
      });
			return res.json(coWorkers).status(200)
		}
		catch(err){
			return res.json({message: err.message})
		}
	}
  else {
	//Admin: einfach alle User finden, die überhaupt existieren.
    try {
      const users = await User.find({},{name:1});
      res.json(users);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  }
return
}

 const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

 //interne Funktion
const updateUser = async (req, res) => {
    try {
        const updateduser = await User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

 const deleteUser = async (req, res) => {


	//Über die id role finden, dann Fallunterscheidung
	const role = await getRoleByUserId(req.UserId)
if (role!="admin"){
	const user = await findUserById(req.UserId)
	const coworkerId = req.params.id
	var coWorker = await findUserById(coworkerId)
	user.coworkers.filter(function(ele){ 
		 //Coworker rausstreichen
            return ele != coWorker; 
        });
	//hier pruefen
	const userResult = await updateUser(user) 
	//muss immer möglich sein, daher interne Funktion
}

//komplett andere Funktion als Admin: hier wird der User wirklich gelöscht, nicht nur die  Referenz.

if(role==="admin"){
    try {
        const deleteduser = await User.deleteOne({_id:req.params.id});
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
}
   }
}

module.exports={getUsers, getUserById}