const Task = require("../models/task.model.js");
const User = require("../models/user.model.js")

 const getTasks = async (req, res) => {
  const role = req.userRole
	console.log(req.userId)
	const user = await User.findById(req.userId);
	console.log(user)
if (role==="creator"){
	try {
		const tasks = user.tasks 
    res.json(tasks);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

if (role==="admin"){
  try {
      res.json({message:"admin gives no tasks"});
  } catch (error) {
      res.status(500).json({message: error.message});
  }
}
const myFunction = (coworker) =>{
  console.log(coworker._id)
  const coId = coworker._id
  const userTasks = User.findById(coId).tasks;
  if(userTasks){
  tasks.push(...userTasks)
  }
}
if (role==="editor"){
  try {
// muss erst admins finden
    console.log("as editor")
    user.populate("coworkers")
		const coworkers = user.coworkers
    
    const U1 = new User({username:"U1", password: "U1", role:"63cf18b9b16910037f66f590"})
    const U2 = new User({username:"U2", password: "U2", role:"63cf18b9b16910037f66f590"})
  	U1.save()
    U2.save()
    coworkers.push(U1,U2)
    console.log(coworkers)
    var tasks = []
		coworkers.forEach(myFunction);
     
		// Funktion getTasks ist in diesem Controller def. 
		res.json(tasks);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

}

const getTaskById = async (req, res) => {
      const role = req.userRole
	console.log(req.userId)
	const user = await User.findById(req.userId);
	console.log(user)
  id = req.params.id;
if (role==="creator"){
	try {
		const tasks = user.tasks 
    tasks.filter(
      function(el){
      return el._id === id;
    }
    )
    res.json({tasks});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

if (role==="admin"){
  try {
      res.json({message:"admin gives no tasks"});
  } catch (error) {
      res.status(500).json({message: error.message});
  }
}
const myFunction = (coworker) =>{
  console.log(coworker._id)
  const coId = coworker._id
  const userTasks = User.findById(coId).tasks;
  if(userTasks){
  tasks.push(...userTasks)
  }
}
if (role==="editor"){
  try {
// muss erst admins finden
    console.log("as editor")
    user.populate("coworkers")
		const coworkers = user.coworkers
    
    const U1 = new User({username:"U1", password: "U1", role:"63cf18b9b16910037f66f590"})
    const U2 = new User({username:"U2", password: "U2", role:"63cf18b9b16910037f66f590"})
  	U1.save()
    U2.save()
    coworkers.push(U1,U2)
    console.log(coworkers)
    var tasks = []
		coworkers.forEach(myFunction);
    tasks.filter(
      function(el){
      return el._id === id;
    }
    )
		// Funktion getTasks ist in diesem Controller def. 
		res.json({tasks});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
}

const saveTask = async (req, res) => {
  const user = User.findOne(req.userId)
  if (user.role != "creator"){
    res.json({message: `To save a Task, you need the role Creator, but you are ${user.role}.` 
    })
  }
    try {
      const task = new Task(req.body);
      user.tasks.push(task)
      console.log(user)
      res.status(201).json({message: "Task added successfully."});
    } catch (error) {
    res.status(400).json({message: error.message});
    }
}

//auf updateTask verzichten wir

const deleteTask = async (req, res) => {
  if (req.userRole != "creator"){
    res.json({message: `To delete a task, you need the role Creator, but you are ${req.userRole}.` 
    })
    try {
      User.updateOne(
        { 
          "_id": req.userId
        }, 
        { 
          $pull : { 'tasks': {id: req.params.id } } 
        } 
      )
      res.status(200).json({message: "Task deleted."});
    } catch (error) {
      res.status(400).json({message: error.message});
    }
  }
}
module.exports = {deleteTask, saveTask, getTaskById, getTasks}