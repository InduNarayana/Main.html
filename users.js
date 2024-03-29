const router = require('express').Router();
let User = require('../model/reg.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const password = req.body.password;
  const email = req.body.email;
  const organisation = req.body.organisation;
  const newUser = new User({
    firstname,
    lastname,
    password,
    email,
    organisation,
  });
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;