const express = require('express');
const nodemailer = require('nodemailer');
const { check, validationResult } = require('express-validator/check');

const router = express.Router();

const projects = require('../projects');
const work = require('../work');
const certificates = require('../certificates');
const skills = require('../skills');
const settings = require('../settings.js');

router.get('/', async (req, res) => {
  res.render('index', {
    env: process.env,
    settings,
    page: 'Home'
  });
});

router.get('/projects', async (req, res) => {
  res.render('projects', {
    env: process.env,
    projects,
    settings,
    page: 'Projects'
  });
});

router.get('/contact', async (req, res) => {
  res.render('contact', {
    env: process.env,
    settings,
    page: 'Contact'
  });
});

router.get('/resume', async (req, res) => {
  res.render('resume/index', {
    env: process.env,
    page: 'Resume',
    projects,
    work,
    certificates,
    skills,
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
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
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
