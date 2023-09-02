import express from 'express'
import { createPool } from 'mysql2/promise'
import {config} from 'dotenv'
config()

const app=express()

const pool=createPool({
    host:process.env.MYSQLDB_HOST,
    user:process.env.MYSQLDB_USER,
    password:process.env.MYSQLDB_ROOT_PASSWORD,
    port:process.env.MYSQLDB_PORT
})

app.get('/',(req,res)=>{
    res.send("hola edmundo dsfds")
})

app.get('/ping',async (req,res)=>{
    const result=await pool.query("select now(),'guillem'")
    res.json(result[0])

})

app.listen(3000)

console.log("server on port",3000)