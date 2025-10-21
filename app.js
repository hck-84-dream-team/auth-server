require("dotenv").config();
const express = require("express");
const app = express();
const UserController = require("./controllers/UserController");

app.use(express.json());
app.post("/register", UserController.register);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
