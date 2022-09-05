const express= require('express')
const app = express()
app.use(express.urlencoded({extended:false}))
const mongoose= require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/taskdata',()=>{
    console.log("database connect")
})
const frontendRouter= require('./routers/frontend.js')


app.use(frontendRouter)
app.use(express.static('public'))
app.set('view engine','ejs')
app.listen(5000,()=>{
    console.log("server is running this port 5000")
})

