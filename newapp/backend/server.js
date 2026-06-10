const axios =require("axios")
const express = require("express");
const cors = require("cors")
const multer = require("multer")

const app = express()


app.use(cors())

const upload = multer({
    dest: "Uploads/"
})

app.use(express.json())

// app.get("/call-fastapi", async(req,res)=>{
//     try{
//         const response = await axios.post(
//             "http://localhost:8000/process",
//             {
//                 pdf_path: "/Uploads/21871lc9dfr82gs7729y640ert464783"
//             }
//         );  
    
//         res.json(response.data)

//     }catch (error) {
//         console.log("ERROR:");
//         res.status(500).json({
//             error: "FastAPI call failed"
//         });

//     }
// })

app.get("/",(req,res)=>{
    res.send("Backend Working TNS....")
})

app.post("/upload",upload.single("PDF"),async (req,res)=>{
    // console.log(req.file.path);
    const pdfPath = req.file.path;

    const response = await axios.post(
        "http://localhost:8000/process",
        {
            pdf_path: pdfPath
        }
    );
    res.json(response.data);
})


app.post("/response",async (req,res)=>{
    console.log(req.body.status)
    console.log("send request to python(port 8000)")
    const response = await axios.post(
        "http://localhost:8000/response",
        {
            query: req.body.query,
            status:req.body.status
        }
    );
    console.log(response.data)
    res.json(response.data)
})

app.listen(5000,()=>{
    console.log("Seerver is running at port: 5000")
})

