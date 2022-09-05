const router = require('express').Router()
const Data = require('../model/admin.js')
router.get('/',(req,res)=>{
    res.render('index.ejs')
})
router.get('/register',(req,res)=>{
    res.render('register.ejs',{text:''})
})
router.post('/regdata',async(req,res)=>{
    const Email =req.body.email;
    const pass = req.body.pass;
    const userDate = await Data.findOne({mail:Email})
    if(userDate){
        res.render('register.ejs',{text:'Gmail already exist'})
        return res.status(400)
    }
  const insertdata = new Data({mail:Email, password:pass})
  insertdata.save()
res.redirect('/')    
})

router.get('/login',(req,res)=>{
    res.render('login.ejs')
})
router.post('/logindata',async(req,res)=>{
    const loginEmail =req.body.email;
    const loginPass = req.body.pass;
       const checkLogin= await Data.findOne({mail:loginEmail})
       if(checkLogin !==null){
        if(checkLogin.password==loginPass){
            res.redirect('/')
        }else{
            res.redirect('/login')
        }
        
       }else{
        res.redirect('/login')
       }
      

})



module.exports =router;