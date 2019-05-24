const mongoose = require('mongoose');
const Vocab = mongoose.model('Vocal');

exports.listAllWords = (req, res) => {
  Vocab.find({}, (err, word) => {
    if (err) {
      res.send(err);
    }
    res.json(words);
  });
};

exports.createWord = (req, res) => {
  const newWord = new Vocab(req.body);
  newWord.save((err,word) => {
    if(err) {
      res.send(err);
    }
    res.send(word);
  });
}