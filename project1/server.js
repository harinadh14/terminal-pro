const express = require("express")
const app = express()
const { exec } = require("child_process")
import react  from "react";
import ReactDOM from "react-Dom/client"


ReactDOM.render(
    <h1> this is hairnah </h1> ,document.getElementById("root")
)()

app.get("/prompt" , (req,resp) => {
                  var command = req.query.cmd ;

                exec( command , (err,stdout,stderr) => {


                              resp.write("<pre>"+ stdout +"</pre>" );

                              resp.write("<pre>" + stderr + "</pre>");
                              });

         })

app.get("/home" , (req,resp) => {

                resp.sendFile(__dirname + "/promptfile.html");

})


const port = 46467;
app.listen((port) , (resp) => {   console.log("server started ........."); })

