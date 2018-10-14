require('dotenv').config()
const {json} = require('body-parser')
const express = require('express')
const massive = require('massive')
const cors = require('cors')


const {getAllData} = require('../server/controller')
const {addData} = require('../server/controller')
const {deleteData} = require('../server/controller')
const {updateData} = require('../server/controller')
const {getOne} = require('../server/controller')


const port = 3001
const app = express()

app.use(json())
app.use(cors())

massive( process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)

    //  dbInstance.create_table()
    //     .then(response => {
    //     console.log(response)
    //     }).catch(error => console.log(error))

}).catch(error=>console.log(error));

app.get('/api/inventory', getAllData)
app.post('/api/product', addData)
app.delete('/api/inventory/:id', deleteData)
app.put(`/api/inventory/:id`, updateData)
app.get(`/api/inventory/:id`, getOne)


app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
})
