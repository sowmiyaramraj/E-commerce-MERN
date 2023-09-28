const express = require("express");
const router = express.Router();
const usermodule = require("../module/usermodule");

router.post("/create",usermodule.createUser);
router.get("/get",usermodule.getUser);
router.delete("/delete",usermodule.deleteUser);
router.put("/update",usermodule.updateUser);

module.exports=router;