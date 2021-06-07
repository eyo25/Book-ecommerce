import mongoose from 'mongoose'
const reviewSchema=mongoose.Schema({
    name:{type:String ,requierd:true},
    rating:{type:Number ,requierd:true},
    Comment:{type:String ,requierd:true},
},{timestamps:true})
const productShecma= mongoose.Schema({
    user:{
type:mongoose.Schema.Types.ObjectId,
requierd:true,
ref:'User'
    },
    name:{
        type:String,
        requierd:true
    },
    image:{
        type:String,
        requierd:true  
    },
    brand:{
        type:String,
        requierd:true
    },
    catagory:{
        type:String,
        requierd:true
        
    },
    discription:{
        type:String,
        requierd:true
        
    },
    reviews:[reviewSchema],
    rating:{
        type:Number,
        requierd:true,
        default:0
    },
    numReviews:{
        type:Number,
        requierd:true,
        default:0
        
    },
    price:{
        type:Number,
        requierd:true,
        default:0
        
    },
    countInStock:{
        type:Number,
        requierd:true,
        default:0
        
    },
},{
    timestamps:true
})
const Product=mongoose.model('Product',productShecma)
export default Product