const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const createSurveySchema = new Schema({
  surveyname: { type: String, required: false },
  noofqsns: {type:Number,required:false},
  question: { type: String, required: true },
  optiontype: { type: String, required: true },
}, {
  timestamps: true,
});

const Survey = mongoose.model('Survey', createSurveySchema);

module.exports = Survey;