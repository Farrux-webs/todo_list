const express = require("express");
require("dotenv").config();

const app = express();

const {route} = require("./routes/routes")

app.use(express.json());


app.use("/api", route);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`SERVER IS WORKING ON ${PORT} PORT`);
});
