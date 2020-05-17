const express = require('express');

const router = express.Router();

const isAPIAuthenticated = require('../middleware/isAPIAuthenticated');

const signupPostController = require('../controllers/api/auth/signup/post');

const profilePostConroller = require('../controllers/api/auth/profile/post');

router.post(
  '/auth/signup',
    isAPIAuthenticated,
    signupPostController
);
router.post(
  '/auth/profile',
    isAPIAuthenticated,
    profilePostConroller
);

module.exports = router;
