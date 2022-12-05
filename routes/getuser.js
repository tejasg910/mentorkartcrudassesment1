const express = require("express");
const User = require("../model/User");
const router = express.Router();
//creating request for getting one user with his email
router.post("/getuser", express.json(), async (req, res) => {
  const { email } = req.body;

  try {
    //finding the email
    const data = await User.findOne({ email });
    if (data) {
      //if the data founds then this will sent to the user
      res.status(200).json({ success: true, message: "data found", data });
    } else {
      //if the user with this email is not found then this response will sent to the user
      res
        .status(400)
        .json({ success: false, message: "No user found with this email" });
    }
  } catch (error) {
    //if something went wrong during the operation this will sent to the user
    res.status(500).json({ success: fasle, error: error.message });
  }
});

module.exports = router;
