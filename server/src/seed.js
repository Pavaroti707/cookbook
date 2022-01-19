const mongoose = require("mongoose");
// daj mi link od baze ovdje ja da! ko ce drugi e

const mongoUrl =
  "mongodb+srv://Paragon004:!400nogaraP$@cluster0.xrkyg.mongodb.net/thirthy?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Seeding starting..."))
  .catch(() => console.log(`Error connecting to MongoDB ${mongoUrl}`));

const reciepeModel = require("./models/reciepe.model");
const userModel = require("./models/user.model");

userModel.create(
  {
    name: "name",
    email: "name@name.name",
    password: "namename",
  },
  function () {
    console.log("User One Added");
  }
);

userModel.create(
  {
    name: "user",
    email: "user@user.user",
    password: "useruser",
  },
  function () {
    console.log("User Two Added");
  }
);

reciepeModel.create(
  {
    name: "Recipe1",
    description: "Recipe1",
    author: "61e6d64a54a33545b476e579",
    ingredients: "ima ima",
    instructions: "mozes ti to",
    category: "Brekfast",
  },
  function () {
    console.log("Recipe 1 Added");
  }
);

reciepeModel.create(
  {
    name: "Recipe2",
    description: "Recipe2",
    author: "61e6d64a54a33545b476e579",
    ingredients: "ima ima",
    instructions: "mozes ti to",
    category: "Brekfast",
  },
  function () {
    console.log("Recipe 2 Added");
  }
);

reciepeModel.create(
  {
    name: "Recipe3",
    description: "Recipe3",
    author: "61e6d64a54a33545b476e579",
    ingredients: "ima ima",
    instructions: "mozes ti to",
    category: "Brekfast",
  },
  function () {
    console.log("Recipe 3 Added");
  }
);

reciepeModel.create(
  {
    name: "Recipe4",
    description: "Recipe4",
    author: "61e6d64a54a33545b476e579",
    ingredients: "ima ima",
    instructions: "mozes ti to",
    category: "Brekfast",
  },
  function () {
    console.log("Recipe 4 Added");
  }
);

reciepeModel.create(
  {
    name: "Recipe5",
    description: "Recipe5",
    author: "61e6d64a54a33545b476e579",
    ingredients: "ima ima",
    instructions: "mozes ti to",
    category: "Brekfast",
  },
  function () {
    console.log("Recipe 5 Added");
  }
);

mongoose.connection.close();
console.log("Seeding Done");
