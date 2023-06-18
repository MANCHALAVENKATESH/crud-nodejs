const { json } = require('body-parser');
const userModelCtrl = require('../model/User');

async function userRegisteration(req,res){
    console.log(req.body)
    const {name,email,phoneNumber,age} = req.body

    var newUser = userModelCtrl.User({
        name:name,
        email:email,
        phoneNumber:phoneNumber,
        age:age
    })

    var savedUser = await newUser.save()
    res.send("Data Saved Successfully")
}

async function getUsersDetails(req, res) {
    try {
        const users = await userModelCtrl.User.find({});
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while retrieving user details");
    }
}

    async function getUserDetails(req, res) {
        console.log("updated",req.body)
    try {
        const users = await userModelCtrl.User.findOne({_id:req.body.userId});
        res.send(users);
        console.log(users)
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while retrieving user details");
    }
}
async function getUserDetails(req, res) {
    console.log("updated",req.body)
try {
    const users = await userModelCtrl.User.findOne({_id:req.body.userId});
    res.send(users);
    console.log(users)
} catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving user details");
}
}
async function updateUserDetails(req, res) {
    try {
        const userId = req.body.userId;
        const { phoneNumber, name, email, age } = req.body;
        
        // Find the user by ID and update their details
        const updatedUser = await userModelCtrl.User.findByIdAndUpdate(
            userId,
            { phoneNumber, name, email, age },
            { new: true }
        );
        
        if (!updatedUser) {
            return res.status(404).send("User not found");
        }
        
        console.log("Updated user:", updatedUser);
        res.send("User Details are Updated Successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while updating user details");
    }
}


async function deleteUserDetails(req, res) {
    console.log(req.body)
    try {
        const userId = req.body.userId;
        const Id = JSON.parse(userId)
                const deletedUser = await userModelCtrl.User.findByIdAndDelete(Id);
        
        if (!deletedUser) {
            return res.status(404).send("User not found");
        }
        
        console.log("Deleted user");
        res.send('User is Deleted Successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while deleting user");
    }
}
module.exports = {userRegisteration,getUsersDetails,getUserDetails,deleteUserDetails,updateUserDetails}