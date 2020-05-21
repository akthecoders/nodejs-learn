const collectAnswers = require('./lib/collectAnswers');

const questions = [
  "What is your name ",
  "Where do you live ",
  "What are you doing to do with NodeJs "
];

// const collectAnswers = (questions, done) => {
//   const answers = [];
//   const [firstQuestion] = questions;
//   const questionAnswered = answer => {
//     answers.push(answer);
//     if(answers.length < questions.length) {
//       rl.question(questions[answers.length], questionAnswered);
//     }
//     else {
//       done(answers);
//     }
//   }
//   rl.question(firstQuestion, questionAnswered);
// }

const answerEvent = collectAnswers(questions);

answerEvent.on("answer", answer => console.log(`question answered: ${answer}`))
answerEvent.on("complete", answers => {
  console.log("Thank you for your answers. ");
  console.log(answers);
});
answerEvent.on("complete", () => process.exit());

