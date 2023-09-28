const express=require("express");
const router=express.Router();
const productmodule = require("../module/productmodule");
const create = require("../module/productmodule")

const update = require("../module/productmodule")
router.post("/create",productmodule.createproduct);
router.put("/update/:productId",productmodule.updateproduct);
router.delete("/delete/:id",productmodule.deleteproduct);
router.get("/get",productmodule.getproduct);

module.exports=router;