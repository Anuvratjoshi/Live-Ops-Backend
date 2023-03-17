const mongoose = require("mongoose");
/*
it accepts 2 things 1 the str, 2nd collection (under which collection we wnat to create)

const userSchema = new mongoose.Schema({

},{collection:"user"})
*/

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    // email:mongoose.Types.email it will check for basic email validation.
    email:String,
    mobile:Number
});

// const user = mongoose.model("user",userSchema);
// module.exports = {user}
const user = mongoose.model("user",userSchema);
module.exports = user
