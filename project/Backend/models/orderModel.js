import mongoose from 'mongoose'
const orderShecma= mongoose.Schema({
    user:{
type:mongoose.Schema.Types.ObjectId,
requierd:true,
ref:'User'
    },
    orderItems:[{
name:{type:string,requierd:true},
qty:{type:Number,requierd:true},
image:{type:string,requierd:true},
price:{type:Number,requierd:true},
product:{
    type:mongoose.Schema.Types.ObjectId,
    requierd:true,
    ref:'Product'
}
    }],


    shippingAdress:{
       address:{type:String,requierd:true},
       city:{type:String,requierd:true},
       postalCode:{type:String,requierd:true},
       country:{type:String,requierd:true},
    },
    paymentMethod:{
        type:String,
        requierd:true
    },
    paymentResult:{
       id:{ type:String},
       status:{ type:String},
       update_time:{ type:String},
       email_address:{ type:String},
        
    },
    taxPrice:{
        type:Number,
        requierd:true,
        default:0.0
        
    },
    shippingPrice:{
        type:Number,
        requierd:true,
        default:0.0
        
    },
    totalPrice:{
        type:Number,
        requierd:true,
        default:0.0
        
    },
    isPayed:{
        type:Boolean,
        requierd:true,
        default:false
        
    },
    payedAt:{
        type:Date,
        
        
    },
    isDeliverd:{
        type:Boolean,
        requierd:true,
        default:false
        
    },
    deliverdAt:{
        type:Date,
        
        
    },
},{
    timestamps:true
})
const Order=mongoose.model('Order',orderShecma)
export default Order