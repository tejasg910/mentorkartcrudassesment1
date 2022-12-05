const express = require("express");
const router = express.Router();
const User = require("../model/User");
//creating request for updating the data here email will not updated
router.post("/updateuser", express.json(), async (req, res) => {
  const { username, address, mobile, password } = req.body;

  try {
    let _id = req.query.id;
    const d = await User.findByIdAndUpdate(
      { _id },
      { username, address, mobile, password },
      { new: true }
    );

    //    await d.save()
    res
      .status(200)
      .json({ success: true, message: "data updated successfully", data: d });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
