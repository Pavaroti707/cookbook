const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://Paragon004:!400nogaraP$@cluster0.xrkyg.mongodb.net/thirthy?retryWrites=true&w=majority";

async function settingUpDb() {
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Seeding starting..."))
    .catch(() => console.log(`Error connecting to MongoDB ${mongoUrl}`));
}

const reciepeModel = require("./models/reciepe.model");
const userModel = require("./models/user.model");

async function addingUser1() {
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
}

async function addingUser2() {
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
}

async function addingRecipe1() {
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
}

async function addingRecipe2() {
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
}

async function addingRecipe3() {
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
}

async function addingRecipe4() {
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
}

async function addingRecipe5() {
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
}

async function Adding() {
  const db = await settingUpDb();
  setTimeout(async () => {
    const addUser1 = await addingUser1();
    const addUser2 = await addingUser2();
    const addRecipe = await addingRecipe1();
    const addRecipe2 = await addingRecipe2();
    const addRecipe3 = await addingRecipe3();
    const addRecipe4 = await addingRecipe4();
    const addRecipe5 = await addingRecipe5();
  }, 3000);
}

(async () => {
  await Adding();

  setTimeout(async () => {
    mongoose.connection.close();
    console.log("Seeding Done");
  }, 5000);
})();
