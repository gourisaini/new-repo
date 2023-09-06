const express = require("express");
const app = express();
const cors = require("cors");

require("./models/db").connectDatabase();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use("/", require("./routes/userRouter"));

app.listen(8080,()=>{
    console.log("connected to server 8080");
})