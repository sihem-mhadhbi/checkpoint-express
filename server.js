const express = require("express");
const path = require("node:path");
const app = express();
const logger = require("./middleware/logger");
const port = process.env.PORT || 5000;
app.use(logger);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "HomePage.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "ContactUs.html"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "OurServices.html"));
});
app.listen(port, function () {
  console.log("the server is running on port", port);
});
