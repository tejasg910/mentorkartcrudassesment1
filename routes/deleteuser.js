const express = require("express");
const router = express.Router();
const User = require("../model/User");
//creating request for deleting user
router.get("/deleteuser", async (req, res) => {
  //please enter the query in the url like http://localhost:5000/api/deleteuser?id=the _id of the user
  try {
    //getting the id entered in the url
    let _id = req.query.id;
    //finding and deleting using mongoose function
    const data = await User.findByIdAndDelete(_id);

    if (data) {
      //if the data is deleted first time this response with sent to the user

      res.status(200).json({ success: "data deleted successfully" });
    } else {
      //if the data already deleted then this response will sent to the user
      res.status(200).json({ success: "data deleted already" });
    }
  } catch (error) {
    //if something went wrong the we will show this error response
    res.status(500).json({ error: error });
  }
});

module.exports = router;
