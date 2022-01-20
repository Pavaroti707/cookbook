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

async function addingRecipeOne() {
  reciepeModel.create(
    {
      name: "Recipe 1",
      description: "Recipe",
      author: "61e6d64a54a33545b476e579",
      ingredients: "ima ima",
      category: "Brekfast",
      instructions: "mozes ti to",
    },
    function () {
      console.log("Recipe 1 Added");
    }
  );
}

async function addingRecipeTwo() {
  reciepeModel.create(
    {
      name: "Recipe2",
      description: "Recipe",
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

async function addingRecipeThere() {
  reciepeModel.create(
    {
      name: "Recipe3",
      description: "Recipe",
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

async function addingRecipeFour() {
  reciepeModel.create(
    {
      name: "Recipe4",
      description: "Recipe",
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

async function addingRecipeFive() {
  reciepeModel.create(
    {
      name: "Recipe5",
      description: "Recipe",
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
    const addRecipe = await addingRecipeOne();
    const addRecipe2 = await addingRecipeTwo();
    const addRecipe3 = await addingRecipeThere();
    const addRecipe4 = await addingRecipeFour();
    const addRecipe5 = await addingRecipeFive();
  }, 3000);
}

(async () => {
  await Adding();

  setTimeout(async () => {
    mongoose.connection.close();
    console.log("Seeding Done");
  }, 5000);
})();
