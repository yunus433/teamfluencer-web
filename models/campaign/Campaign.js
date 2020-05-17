const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CampaignSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  age_interval: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Campaign', CampaignSchema);
