const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  };

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("hola desde el node");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
