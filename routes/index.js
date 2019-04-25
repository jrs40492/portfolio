const express = require('express');
const loadData = require('../db');
const nodemailer = require('nodemailer');
const { check, validationResult } = require('express-validator/check');

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
    settings: data.settings
  });
});

router.get('/resume', async (req, res) => {
  if (!data) {
    data = await loadData();
  }

  res.render('resume', {
    node_env: process.env.NODE_ENV,
    page: 'Resume',
    settings: data.settings
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
    console.log(req.body);
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
      fromEmail,
      subject: `Portfolio Message from ${name}`,
      html: req.body.message
    };

    // transporter.sendMail(options, (error, info) => {
    //   if (error) {
    //     console.log(error);
    //     res.status(400);
    //     res.send('Error sending message');
    //   }
    //   console.log('Message %s sent: %s', info.messageId, info.response);
    // });

    res.end();
  }
);

module.exports = router;
