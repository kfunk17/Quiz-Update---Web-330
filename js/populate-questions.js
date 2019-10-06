$(function() {
    // qId is used for creating unique ids for each question in our questions object, we increment it +1 every loop -kl
    var qId=1;
    // get each question -kl
    for (var key in questions) {
        // this will return each parent key of our JSON object (one, two, three, four etc) -kl
        var question = questions[key];
        // using template literals for the extended html var - kl, source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals -kl
        // ${} is how to insert a js variable inside a template literal -kl
        var questionHtml = 
        `<section id='q${qId}' class='question-container'>
            <div id='question-q${qId}' class='question'><h3>#${qId}: ${question.question}</h3></div>
            <div id='answer-one-q${qId}' class='answer'><p>${question.answerOne}</p></div>
            <div id='answer-two-q${qId}' class='answer'><p>${question.answerTwo}</p></div>
            <div id='answer-three-q${qId}' class='answer'><p>${question.answerThree}</p></div>
            <div id='answer-four-q${qId}' class='answer'><p>${question.answerFour}</p></div>
            <div id='correct-incorrect-q${qId}' class='question-result'></div>
        </section>`
        // add our html string variable to the main element in our html document -kl
        $('.questions-container').append(questionHtml);
        // +1 for the next id -kl
        qId++;
    }
    for (var i=0; i < 10; i++) {
        var rId = i + 1;
        var resultsHtml = `<div id='q-tab-${rId}' class='q-tab'><p>Question ${rId}</p></div>`;
        $('.q-tabs-container').append(resultsHtml);
    }
});