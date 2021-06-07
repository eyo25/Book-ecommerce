import mongoose from 'mongoose'
const userShecma= mongoose.Schema({
    name:{
        type:String,
        requierd:true
    },
    email:{
        type:String,
        requierd:true,
        unique:true
    },
    password:{
        type:String,
        requierd:true
    },
    isAdmin:{
        type:Boolean,
        requierd:true,
        default:false
    },
},{
    timestamps:true
})
const User=mongoose.model('User',userShecma)
export default User