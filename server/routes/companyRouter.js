const express = require('express');
const bcrypt = require('bcrypt');
const { Company } = require('../db/models');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
    try {
      const [company, created] = await Company.findOrCreate({
        where: { email },
        defaults: { name, password: await bcrypt.hash(password, 10) },
      });
      if (!created) return res.sendStatus(401);
      const sessionUser = JSON.parse(JSON.stringify(company));
      delete sessionUser.password;
      req.session.company = sessionUser;
      return res.json(sessionUser);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(500);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const company = await Company.findOne({
        where: { email },
      });
      // if (!(await bcrypt.compare(password, user.password))) {
      //   return res.sendStatus(401);
      // }

      const sessionUser = JSON.parse(JSON.stringify(company));
      delete sessionUser.password;
      req.session.company = sessionUser;
      return res.json(sessionUser);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.get('/check', (req, res) => {
  if (req.session.company) {
    return res.json(req.session.company);
  }
  return res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

module.exports = router;
