const express = require("express");
const router = express.Router();
const User = require("../model/User");

//creating request for adding user
router.post("/create", express.json(), async (req, res) => {
  const { username, address, mobile, password, email } = req.body;

  //you can also pass the ...userData extracted from the req.body object
  try {
    //getting user with entered email
    const user = await User.findOne({ email });

    if (!user) {
      //if user not found then save the data and inform new user created successfully
      const data = new User({ username, address, mobile, password, email });
      //saving the data
      const saved = await data.save();
      if (saved) {
        //sending the response if saved in database
        res
          .status(200)
          .json({
            success: true,
            message: "New user created successfully",
            data,
          });
      } else {
        //throwing the error if user is not saved in database
        res
          .status(500)
          .json({ success: false, message: "Internal server error occurred" });
      }
    } else {
      //if user exists then send response with message this email is already taken

      return res
        .status(400)
        .json({
          success: false,
          message: "This user already exists, please try with another name",
        });
    }
  } catch (error) {
    //throwing error response if something went wrong during operation
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;
