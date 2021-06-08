import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRouts from './Routes/productRoutes.js'
const app=express()
dotenv.config()
connectDB()
app.get('/', (req,res)=>{
    res.send('api is Running')
})
app.use('api/products',productRouts)

const PORT=process.env.PORT||5000
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))