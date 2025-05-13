const User = require("../models/userModel")

//create a user 

const createUser =async(req , res) => {
    
    try {
        const{fullName , email , age} = req.body
// c'est la creation ou l'ajout d'un nouveau user a la BD
    const newUser = await User.create({fullName , email , age})

    return res.status(201).json({message: "Successfully user creation", newUser})
    } catch (error) {
        
        return res.status(500).json({message: "Err Server", error})
    }

}
//recuper tous les utilisateurs

const allUsers = async (req, res) =>{
    try {

        const users = await User.find()
        return res.status(200).json({message: "Successfully retrieve users", users})
        
    } catch (error) {
        return res.status(500).json({message: "Err Server", error})
    } 
    

}

//Recuper un seul utilisateur
const getUser = async (req, res) =>{
    try {
        const {userId} = req.params;
        const user = await User.findById(userId)
        return res.status(200).json({message: "Successfully retrieve user", user})
        
    } catch (error) {
        return res.status(500).json({message: "Err Server", error})
    } 
    
}

// Update user

const updateUser = async (req, res) => {
    const {fullName, email, age} = req.body

    const {userId} = req.params;
    const user = await User.findByIdAndUpdate(
        userId,
        {$set : { 
            fullName : fullName, 
            email : email,
            age : age
        }},
        {new : true}

    )
    return res.status(200).json({message: "Successfully update user", user})

}

// delete user
const deleteUser = async(req, res) =>{
    const {userId} = req.params;
    await User.findByIdAndDelete(userId)

    return res.status(200).json({message: "Successfully delete user"})


}


module.exports ={
    createUser, allUsers, getUser, updateUser, deleteUser
}