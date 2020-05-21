const readLine = require('readline');
const {EventEmitter} = require('events');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = (questions, done = f => f) => {
  const answers = [];
  const [firstQuestion] = questions;
  const emitter = new EventEmitter();

  const questionAnswered = answer => {
    emitter.emit("answer", answer);
    answers.push(answer);
    if(answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    }
    else {
      emitter.emit("complete", answer);
      done(answers);
    }
  }
  rl.question(firstQuestion, questionAnswered);
  return emitter;
}