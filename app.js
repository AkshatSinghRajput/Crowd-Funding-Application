const express = require("express");
const app = express();
const connectToMongo = require("./db");
const cors = require("cors");
const path = require("path");

require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "frontend", "build")));

app.use("/api/auth", require("./Routes/authentication"));
app.use("/api/investor", require("./Routes/investor"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

// Connecting to the datbase
connectToMongo();

//Intializing the application
app.listen(5000 || process.env.PORT, () => {
  console.log(`app listening on port ${5000 || process.env.PORT}`);
});
