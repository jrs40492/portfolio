const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    node_env: process.env.NODE_ENV,
    page_title: process.env.INDEX_TITLE,
    dev_name: process.env.DEV_NAME,
    tag_line: process.env.TAG_LINE,
    twitter_url: process.env.TWITTER_URL,
    resume_url: process.env.RESUME_URL,
    github_url: process.env.GITHUB_URL,
    linkedin_url: process.env.LINKEDIN_URL
  });
});

router.get('/resume', (req, res) => {
  res.render('resume', {
    node_env: process.env.NODE_ENV,
    page_title: process.env.RESUME_TITLE,
    dev_name: process.env.DEV_NAME,
    email: process.env.EMAIL,
    website_url: process.env.WEBSITE_URL,
    github_url: process.env.GITHUB_URL,
    linkedin_url: process.env.LINKEDIN_URL
  });
});

module.exports = router;
