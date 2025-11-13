const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("¡Hola desde Node con CI y Docker!");
});

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));