const express = require('express')
const app = express()
require('./config/config')
 
//get   post  put delete
//midleware
app.use(express.urlencoded({
    extended:false
}))

app.get('/usuario', function (req, res) {
  res.json('get todos los usuario')
});

app.get('/usuario/:id', function (req, res) {
    let id=req.params.id;
    res.json(`get usuario con id ${id}`);
  });

app.post('/usuario',function(req,res){
    let body=req.body;

    if(body.nombre===undefined){
        res.status(400).json({
            ok:false,
            mensaje:'El nombre es necesario'
        })
    }
    res.json({persona:body});
});

app.put('/usuario/:id',function(req,res){
    let id=req.params.id;
    res.json(`Put Usuario ${id}`);
});

app.delete('/usuario',function(req,res){
    res.json('Delete Usuario');
});

console.log(process.env.PORT);
app.listen(process.env.PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
})