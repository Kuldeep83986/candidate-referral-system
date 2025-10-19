const express = require("express");
const cors = require("cors");
const candidateRouter = require("./routes/candidatesRoutes");
const DbConnect = require("./db");
require("dotenv").config();

const app = express();
app.use(cors({
  origin: ["https://candidate-referral-system-ten.vercel.app"]
}));
app.use(express.json());

DbConnect();

app.get("/test", (req,res)=>{
    res.send({message:"this is testing api"})
})

// Routes
app.use("/candidates", candidateRouter);

app.listen(8080, () => console.log(`Server running on port 8080`));
