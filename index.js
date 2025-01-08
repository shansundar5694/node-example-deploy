import express from "express";

const app = express();
const PORT = 4000;

app.use("/get", (req, res) => {
  res.status(200).json({ message: "get call is success" });
});

app.listen(PORT, () => {
  console.log("connect === successfully");
});
