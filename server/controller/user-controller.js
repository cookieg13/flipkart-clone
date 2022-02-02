import User from "../model/userSchema.js";

export const userSignup = async (request, response) => {
  try {
    const exist = await User.findOne({ username: request.body.username });
    if (exist) {
      return response.status(401).json("Username already exists!")
    }
    const user = request.body;
    //validating user
    const newUser = new User(user);
    //saving new user
    await newUser.save();
    //sending response
    response.status(200).json("User is successfullly registered!");
  } catch (error) {
    console.log("Error: ", error.message);
  }
  //return "hello";
};

export const userLoginIn = async (request, response) => {
  try {
    let user = await User.findOne({ username: request.body.username, password: request.body.password });
    if (user) {
      //user present in DB
      return response.status(200).json(`${request.body.username} login successful!`);
    }
    else {
      return response.status(401).json("Invalid login!");
    }
  } catch (error) {
    console.log("Error: ", error.message);
  }
}
