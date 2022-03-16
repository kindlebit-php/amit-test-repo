const express = require('express');
const path = require('path')
const app = express();



//Port
const port =  5000 || process.env.Port;
app.use(express.static(path.resolve(__dirname , './client/build')))
app.get("*" , (req , res )=>{

   res.sendFile(path.resolve(__dirname , './client/build' , 'index.html'))
})

// server listen
app.listen( port ,() => {
    console.log("server started ");
})
