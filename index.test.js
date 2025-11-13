const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("¡Hola desde Node con CI y Docker!"));

test("GET / responde correctamente", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe("¡Hola desde Node con CI y Docker!");
});