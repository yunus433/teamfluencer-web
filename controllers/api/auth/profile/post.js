const mongoose = require('mongoose');

const User = require('../../../../models/user/User');

const getUserObject = require('../../../../utils/getUserObject');

module.exports = (req, res) => {
  if (!req.body || !req.body.id || !req.body.gender || !req.body.name || !req.body.insta_details || !req.body.profile_photo || !req.body.birth_time || !req.body.notification_token || !req.body.country || !req.body.city || !req.body.school)
    return res.status(400).json({ error: 'bad request' });

  User.findByIdAndUpdate(
    mongoose.Types.ObjectId(req.body.id),
    {
      gender: req.body.gender,
      name: req.body.name,
      insta_details: req.body.insta_details,
      profile_photo: req.body.profile_photo,
      birth_time: req.body.birth_time,
      notification_token: req.body.notification_token,
      country: req.body.country,
      city: req.body.city,
      school: req.body.school,
      completed: true
    },
    { new: true },
    (err, user) => {
      if (err) return res.status(500).json({ error: 'mongo error: ' + err });

      return res.status(200).json({ user: getUserObject(user) });
    }
  );
}
