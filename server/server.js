require('dotenv').config()

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: true,
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(cookieParser());

// Use the userRoutes router
app.use("/user", userRoutes);

app.listen(8080, () => {
  console.log("Running...");
});
