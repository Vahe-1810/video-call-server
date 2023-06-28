import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

const postData = {};

app.post("/id", (req, res) => {
  postData.id = req.body.id;
  postData.type = req.body.type;
  res.setHeader("Content-Type", "application/json");
  res.status(204).json({ success: true });
});

app.get("/id", (req, res) => {
  console.log(req.body);
  res.json({ id: postData.id, type: postData.type });
  console.log(postData);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
