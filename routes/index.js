const express = require('express');
const nodemailer = require('nodemailer');
const { check, validationResult } = require('express-validator/check');

const router = express.Router();

const projects = require('../projects.json');
const settings = require('../settings.json');

router.get('/', async (req, res) => {
  res.render('index', {
    node_env: process.env.NODE_ENV,
    imagePath: process.env.IMAGE_PATH,
    settings,
    page: 'home'
  });
});

router.get('/projects', async (req, res) => {
  res.render('projects', {
    node_env: process.env.NODE_ENV,
    imagePath: process.env.IMAGE_PATH,
    projects,
    settings,
    page: 'projects'
  });
});

router.get('/contact', async (req, res) => {
  res.render('contact', {
    node_env: process.env.NODE_ENV,
    imagePath: process.env.IMAGE_PATH,
    settings,
    page: 'contact'
  });
});

router.get('/resume', async (req, res) => {
  res.render('resume', {
    node_env: process.env.NODE_ENV,
    page: 'Resume',
    projects,
    settings
  });
});

router.post(
  '/send',
  [
    check('name')
      .isLength({ min: 1 })
      .withMessage('Name is required.')
      .trim(),
    check('message')
      .isLength({ min: 1 })
      .withMessage('Message is required.')
      .trim(),
    check('email')
      .isEmail()
      .withMessage('E-mail is invalid.')
      .trim()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400);
      res.send(errors.mapped());
    }

    const name = req.body.name;
    const fromEmail = req.body.email;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASS
      }
    });

    const options = {
      to: process.env.EMAIL,
      from: `${name} <${fromEmail}>`,
      subject: `Portfolio Message`,
      html: `<p>Email from ${name} with email: ${fromEmail}.</p> <p>${
        req.body.message
        }</p>`
    };

    transporter.sendMail(options, (error, info) => {
      if (error) {
        console.log(error);
        res.status(400);
        res.send('Error sending message');
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
    });

    res.end();
  }
);

module.exports = router;
