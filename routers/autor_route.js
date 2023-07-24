const express = require('express');
const autorService = require('../services/autor_service');

const router = express.Router();
const service = new autorService();

router.get('/', (req, res)=>{
  const autor = service.find();
  res.json(autor);
});

router.get('/:id_autor',async ( req,res)=>{
  try {
    const { id_autor } = req.params;
    const { nacionalidad } = req.query;
    const autor = await service.buscarNac(id_autor, nacionalidad);
    res.json(autor);
  } catch (error) {
    res.status(404).json({ error: 'Author not found' });
  }
});


module.exports = router;
