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

