const loadData = require('../db');
const express = require('express');

const router = express.Router();

let data;

router.get('/', async (req, res) => {
  if (!data) {
    data = await loadData();
  }

  res.render('index', {
    node_env: process.env.NODE_ENV,
    imagePath: process.env.IMAGE_PATH,
    projects: data.projects,
    settings: data.settings,
    technology: data.tech,
  });
});

router.get('/resume', async (req, res) => {
  if (!data) {
    data = await loadData();
  }

  res.render('resume', {
    node_env: process.env.NODE_ENV,
    page: 'Resume',
    settings: data.settings,
  });
});

module.exports = router;
