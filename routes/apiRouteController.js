const express = require('express');

const router = express.Router();

const isAPIAuthenticated = require('../middleware/isAPIAuthenticated');

const signupPostController = require('../controllers/api/auth/signup/post');

router.post(
  '/auth/signup',
    isAPIAuthenticated,
    signupPostController
);

module.exports = router;
