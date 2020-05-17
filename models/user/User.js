const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema({
  phone: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  firebase_id: {
    type: String,
    required: true,
    unique: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: null
  },
  profile_photo: {
    type: String,
    default: null
  },
  school: {
    type: String,
    default: null
  },
  gender: {
    type: String,
    default: null
  },
  insta_details: {
    type: Object,
    default: {
      username: null,
      fallower_number: null,
      fallowing_number: null,
      bio: null
    }
  },
  birth_time: {
    type: Object,
    default: {
      day: null,
      month: null,
      year: null
    }
  },
  campaigns: {
    type: Array,
    default: []
  },
  credit:{
    type: Number,
    default: 0
  },
  reference_used: {
    type: Boolean,
    default: false
  },
  credit_requests: {
    type: Array,
    default: []
  },
  paid_credit_requests: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('User', UserSchema);
