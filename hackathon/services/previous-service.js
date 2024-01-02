define(function () {
    const internals = {};
    const externals = {};
  
   internals.question = {
    question: "who performed in the Super Bowl XLVII half time show?",
    answers: {1: "Rihanna", 2: "Lady Gaga", 3: "Beyoncé"},
   };

   externals.getQuestion = function(){
    return internals.question;
   }
  

    return externals;
  });