const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")


app.use(cors())
app.use(express.json())


app.post("/api/create-user", async(req,res) => {
    try{
        const {name,admi_no,admi_year,admi_category,admi_type,mobile_no,email,income,parent_name,parent_mobile,distance,gender,e_grants_category} = req.body
        console.log(admi_no)
        const newStudent = await pool.query(
            "INSERT INTO student values ($1::text,$2::text,$3::text,$4::text,$5::int,$6::text,$7::text,$8::text,$9::text,$10::int,$11::int,$12::text,$13::text)",
            [name,admi_no,mobile_no,email,parseInt(admi_year),admi_type,gender,admi_category,e_grants_category,parseInt(income),parseInt(distance),parent_name,parent_mobile]
        )
    }catch (err){
        console.error(err.message)
        console.log("err")
    }
})
app.post("/api/create-field",async(req,res)=>{

    try{
        const {field,type} = req.body
        console.log(field,type)
        const newField = await pool.query(
            `INSERT INTO ${field} values ($1::text)`,[type]
        )
        
    }
    catch (err){
        console.error(err.message)
    }
})

app.get("/api/get-details",async (req,res)=>{
    try{
        const details = await pool.query(
            "SELECT * FROM student"
        )
        res.json(details.rows);
    }catch (err){
        console.error(err.message)
    }
})
app.get("/api/get-fields",async (req,res)=>{
    try{
        const genderTypes = await pool.query(
            "SELECT * FROM gender"
        )
        const admiTypes = await pool.query(
            "SELECT * FROM admi_category"
        )
        const e_grantsTypes = await pool.query(
            "SELECT * FROM e_grants_category"
        )
        res.json([genderTypes.rows,admiTypes.rows,e_grantsTypes.rows]);
    }catch (err){
        console.error(err.message)
    }
})



app.delete("/api/remove-user/:id",async( req,res)=>{
    try{
        const { id } = req.params 
        const DeleteUser = await pool.query(
            "DELETE FROM student WHERE admi_no = $1",[id]
        )
        res.json("Items was deleted")
    } catch (err){
        console.error(err.message)
    }
})
app.delete("/api/remove-field",async( req,res)=>{
    try{

        const { id,field } = req.query 
        const DeleteField = await pool.query(
            `DELETE FROM ${field} WHERE type = $1`,[id]
        )
        res.json("Items was deleted")
    } catch (err){
        console.error(err.message)
    }
})

app.listen(4000,()=>{
    console.log("Listening at port 4000")
})
 