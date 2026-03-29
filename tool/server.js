const express = require("express");
const multer = require("multer");
const { exec } = require("child_process");

const app = express();
const upload = multer({ dest: "uploads/" });

app.post("/lock", upload.single("pdf"), (req, res) => {
  const password = req.body.password;
  const input = req.file.path;
  const output = "locked.pdf";

  const command = `qpdf --encrypt ${password} ${password} 256 -- ${input} ${output}`;

  exec(command, (err) => {
    if(err) return res.send("Error");

    res.download(output);
  });
});

app.listen(3000, ()=>console.log("Server running"));