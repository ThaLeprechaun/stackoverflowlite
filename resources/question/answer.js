const data = require("../../data.json");

module.exports = (req, res) => {
  let notFound = true;
  const questionId = parseInt(req.params.questionId, 10); // take note of the 10
  data.questions.forEach((question) => {
    if (question.id === questionId) {
      notFound = false;
      question.answers.push(req.body.answers);
    }
  });

  if (notFound) {
    res.status(404).send("question not found");
    return;
  }

  return res.send(req.body.answers); /* eslint consistent-return: off */
}
