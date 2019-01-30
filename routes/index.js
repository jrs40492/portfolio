const db = require('../db');
const express = require('express');

const router = express.Router();

console.log(`why: ${db}`);

const getSettings = async () => {
  const settings = await db.collection("settings").doc("site").get();
  return settings.data();
}

const getTech = async () => {
  const techSnapshot = await db.collection("tech").orderBy('order').get();

  const techList = [];
  techSnapshot.forEach((tech) => {
    techList.push({
      id: tech.id,
      data: tech.data(),
    });
  });
  return techList;
}

const getProjects = async () => {
  const projectsSnapshot = await db.collection("projects").orderBy('order').get();

  const projects = [];
  projectsSnapshot.forEach((project) => {
    projects.push({
      id: project.id,
      data: project.data(),
    });
  });
  return projects;
}

router.get('/', async (req, res) => {
  const projects = await getProjects();
  const settings = await getSettings();
  const technology = await getTech();

  res.render('index', {
    node_env: process.env.NODE_ENV,
    imagePath: process.env.IMAGE_PATH,
    projects,
    settings,
    technology,
  });
});

router.get('/resume', async (req, res) => {
  const settings = await getSettings();

  res.render('resume', {
    node_env: process.env.NODE_ENV,
    page: 'Resume',
    settings,
  });
});

module.exports = router;
