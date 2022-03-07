const express = require("express");
const fetch = require("cross-fetch");

const app = express();

app.get("/", async (req, res) => {
  const url =
    "http://appdesen/cooperforte-30facade-integracao/rest/investimentos/26197529734/saldo/2022-02-04";

  const response = await fetch(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: "Basic bW9iaWxlOjEyMzQ1Ng==",
    },
  });
  res.json(await response.json());
});

app.listen(3000, () => {
  console.log("Listen on port 3000");
});
