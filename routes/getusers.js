const express = require("express");
const User = require("../model/User");
const router = express.Router();
//creating the request for getting all the users
router.get("/getusers", async (req, res) => {
  try {
    //finding all the data in user model
    const data = await User.find({});
    if (data) {
      //if data found then this will sent
      res.status(200).json({ data });
    } else {
      //if not this will sent
      res.status(200).json({ success: false, message: "No data found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
