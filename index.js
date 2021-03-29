let express = require('express');
let app = express();
const path = require('path');
const bodyparser = require('body-parser');
let routerManeger = require('./router/routesManeger');
const port = 5000;

 app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

 routerManeger(app);   

app.listen(port,()=> console.log(`Servidor online na porta: ${port}`));