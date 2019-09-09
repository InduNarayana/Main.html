const router = require('express').Router();
let Survey = require('../model/survey.model');

router.route('/').get((req, res) => {
  Survey.find()
    .then(survey => res.json(survey))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const surveyname = req.body.surveyname;
  const noofqsns = req.body.noofqsns;
  const question = req.body.question;
  const optiontype = req.body.optiontype;
  
  const newSurvey = new Survey({
    surveyname,
    noofqsns,
    question,
    optiontype,
  });
  newSurvey.save()
    .then(() => res.json('Survey added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;