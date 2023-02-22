
const http = require("http");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 4000;
const pdp = path.join(__dirname,"./public");
const fs = require("fs");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
app.use(bodyParser.json());
app.use(express.static(pdp));
const server = http.createServer(app);
server.listen(port,()=> {
    console.log(`server is up on port ${port}!`);
})


app.post("/descargar_niveles",upload.none(),(req,res)=> {
    fs.readFile("./database/niveles.json",(err,data) => {
        if(err) throw err;
        console.log(data.toString())
        res.send(data.toString());

    })
})