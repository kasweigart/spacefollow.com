require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = 3001;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const marsRouter = require("./routes/mars");
app.use("/mars", marsRouter);

const imagesRouter = require("./routes/images");
app.use("/images", imagesRouter);

const intoTheVoidRouter = require("./routes/intoTheVoid");
app.use("/into-the-void", intoTheVoidRouter);

const contactRouter = require("./routes/contact");
app.use("/contact", contactRouter);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(port, "127.0.0.1");
console.log(`Listening on port ${port}...`);
