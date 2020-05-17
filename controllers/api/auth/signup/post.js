const User = require('../../../../models/user/User');

const getUserObject = require('../../../../utils/getUserObject');

module.exports = (req, res) => {
  if (!req.body || !req.body.phone || !req.body.firebase_id)
    return res.status(400).json({ error: 'bad request' });

  User.findOne({
    phone: req.body.phone
  }, (err, user) => {
    if (err) return res.status(500).json({ error: 'mongo error: ' + err });

    if (user) {
      User.findOneAndUpdate({
        phone: req.body.phone
      }, {
        firebase_id: req.body.firebase_id
      }, {new: true}, (err, user) => {
        if (err) return res.status(500).json({ error: 'mongo error: ' + err });

        return res.status(200).json({ user: getUserObject(user) });
      });
    } else {
      const newUserData = {
        phone: req.body.phone,
        firebase_id: req.body.firebase_id
      };

      const newUser = new User(newUserData);

      newUser.save((err, user) => {
        if (err) return res.status(500).json({ error: 'mongo error: ' + err });

        return res.status(200).json({ user: getUserObject(user) });
      });
    }
  });
}
