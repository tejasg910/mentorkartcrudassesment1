const express = require("express"); // imported the express
const mongoose = require("mongoose");
require("./connect/db");
const port = process.env.PORT || 5000; //process.env is used when hosting is required here is no use of process.env
const app = express();

//here we are defining our routes
app.use("/api", require("./routes/adduser"));
app.use("/api", require("./routes/getusers"));
app.use("/api", require("./routes/getuser"));
app.use("/api", require("./routes/deleteuser"));
app.use("/api", require("./routes/updateuser"));

app.listen(port, () => {
  console.log("app is listening on the port ", port);
});
