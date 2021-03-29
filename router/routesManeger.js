let express = require('express');
let router = express.Router();
const routerHome = require('./routerHome');
const routerComentarios = require('./routerComentarios');
const routerParametros = require('./routerParametros');
const routerJson = require('./routerJson');



const routeres = (app)=>{

    app.use('/', routerHome);
    app.use('/comentarios', routerComentarios);
    app.use('/parametros',routerParametros);
    app.use('/json', routerJson);
    app.get('*', (req, res)=>{
        res.render('404');
    })
}

module.exports = routeres;