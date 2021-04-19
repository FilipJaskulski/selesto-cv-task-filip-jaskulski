const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/api/info", function (req, res) {
  res.json({ msg: +new Date() });
});

//uploading file
const upload = multer({
  dest: "./uploads",
});

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
});
app.get("/api/files", (req, res) => {
  console.log(res);
});

const port = 8070 || process.env.PORT;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
