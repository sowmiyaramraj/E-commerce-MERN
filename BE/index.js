const express= require("express");
const dotenv = require('dotenv');
const mongo= require("./connect");
const productRouter = require("./router/productrouter");
const userRouter= require("./router/userrouter");
const registerRouter = require("./router/registerrouter");
const cors = require("cors");

dotenv.config();
const app=express();
app.use(express.json());

mongo.connectmongoose();
app.use(cors());
app.use('/product',productRouter);
app.use('/user',userRouter);
app.use('/register',registerRouter);
// app.use("/create",productmodule.createproduct);
app.listen(process.env.PORT || 3001);