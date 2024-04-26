const express = require('express');
const { Operatives } = require('../db/models');

const router = express.Router();

router.route('/nickname/assault').get(async (req, res) => {
  try {
    const operatives = await Operatives.findAll({

      attributes: ['nickname', 'id', 'class_id', 'img'],
    });
    return res.json(operatives);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
