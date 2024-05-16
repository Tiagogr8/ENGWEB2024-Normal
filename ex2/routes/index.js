var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get("http://localhost:16000/contratos")
  .then(resp =>{
      contratos = resp.data
      res.status(200).render("contratosList", {'lContratos' : contratos})
  })
  .catch(erro =>{
      res.status(501).render('error', {'error' : erro})
  })
});

router.get('/entidades/:nipc', function(req, res, next) {
  axios.get("http://localhost:16000/contratos")
  .then(resp =>{
    contratos = resp.data
    contratos = contratos.filter(contrato => contrato.NIPC_entidade_comunicante == req.params.nipc)
    console.log(contratos)
    nome_entidade = contratos[0].entidade_comunicante
    var total = 0;
    contratos.forEach(contrato => {
      // Converter para double
      total += parseFloat(contrato.precoContratual.replace(',', '.'));
    });

    res.status(200).render("entidadePage", {'id_Entidade': req.params.nipc ,'lContratos' : contratos, 'nome' : nome_entidade, 'total' : total})

})
.catch(erro =>{
    res.status(501).render('error', {'error' : erro})
})
});



router.get('/:id', function(req, res, next) {
  axios.get("http://localhost:16000/contratos/" + req.params.id)
  .then(resp =>{
      contrato = resp.data
      res.status(200).render("contratoPage", {'contrato' : contrato})
  })
  .catch(erro =>{
      res.status(501).render('error', {'error' : erro})
  })
});




module.exports = router;
