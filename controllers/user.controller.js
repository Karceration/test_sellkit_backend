import User from "../models/user.model"
export const getUsers = async (req,res) => {
    try {
        const Users = User.find();
        res.json(Users);

    } catch (error) {
        console.log("Error");

    }

}

export const AddUsers = async(req,res) => {
    const body = req.body;
    const newUser = new User(body)
    try {
        await newUser.save();
        res.json(newUser);
        console.log("user was successfully created");
        

    } catch (error) {
        console.log("Error");

    }
    
}