const { default: mongoose } = require("mongoose");


const usermodel = new mongoose.Schema({
    accountNumber:String,
    password:String,
    email:String,
    name:String,
    dob:String,
    aadhaarNumber:String,
    mobileNumber:String,
    balance:{
        type:String,
        default:0
    }
})

const usertable = mongoose.models.accounters || mongoose.model("accounters",usermodel);
export default usertable;