const mongoose=require("mongoose");

module.exports={
    async connectmongoose(){
        try{
           await mongoose.connect(process.env.MONGOATLAS);
            console.log("Success");
        }
        catch(err){
            console.log(err);
        }
    }
}