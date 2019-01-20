const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    page_title: process.env.PAGE_TITLE,
    dev_name: process.env.DEV_NAME,
    tag_line: process.env.TAG_LINE,
    node_env: process.env.NODE_ENV,
    twitter_url: process.env.TWITTER_URL,
    resume_url: process.env.RESUME_URL,
    github_url: process.env.GITHUB_URL
  });
});

module.exports = router;
