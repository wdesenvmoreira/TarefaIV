let express = require('express');
let router = express.Router();
let p

   router.get('/', (req, res)=>{
       res.render('parametros');
      });


module.exports = router;