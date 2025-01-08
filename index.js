import express from "express";
import fs from "fs";
import { format } from "date-fns";

const app = express();
const PORT = 4000;

app.use("/get", (req, res) => {
  res.status(200).json({ message: "get call is success" });
});

app.get("/write-read", (req, res) => {
  let today = format(new Date(), "dd-mm-yyyy-HH-mm-ss");
  console.log("today", today);
  let filePath = `TimeStamp/${today}.txt`;
  fs.writeFileSync(filePath, `${today}`, "utf8");
  let data = fs.readFileSync(filePath, "utf8");
  res.status(200).json({ data });
});

app.listen(PORT, () => {
  console.log("connect === successfully");
});
