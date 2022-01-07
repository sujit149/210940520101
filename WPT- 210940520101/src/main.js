const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const {addUser, selectUser} = require("./user");
app.get("/users",async (req,res) => {
    const list = await selectUser();
    res.json(list);

});

app.post("/adduser",async(req,res) => {
    const user = req.body;
    await addUser(user);
    res.json({message:"User added "});
});
app.listen(4000,() => console.log("server started"));