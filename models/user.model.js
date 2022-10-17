const mongoose = require('mongoose');
const {Schema} = mongoose;

const userModel = new Schema({
    email:{
        type:String
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    age:{
        type:String
    },
    job:{
        type:String
    }
})

const User= mongoose.model('User',userModel);

export default User;