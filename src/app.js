const express = require("express");
const db = require("./models/index");
const userRoutes = require("./controllers/userController");
const requestLogger = require("./middlewares/requestLogger");

const app = express();

app.use(express.json());

app.use(requestLogger);

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
