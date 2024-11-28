const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use(routes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
