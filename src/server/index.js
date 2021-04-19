const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();
const fs = require("fs");

app.use(cors());
app.get("/api/info", function (req, res) {
  res.json({ msg: +new Date() });
});

//uploading file
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).single("file");

app.post("/api/upload", upload, (req, res) => {
  console.log(req.file);
  res.status(200).json({ file: req.file });
});

app.get("/api/files", function (req, res) {
  fs.readdir("./uploads", (err, data) => {
    const filesArr = [];
    if (err) throw err;
    res.status(200).json({ files: data });
  });
});

const port = 8070 || process.env.PORT;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
