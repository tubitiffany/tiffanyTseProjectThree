$(document).ready(function () {

// CHARACTERS ARRAY
const characters = {
    sebastian: {
        question1: 'q1Scold',
        question2: 'q2Responsible',
        question3: 'q3SingingAdvisor',
        question4: 'q4Swimming'
    },
    zazu: {
        question1: 'q1Scold',
        question2: 'q2Responsible',
        question3: 'q3SingingAdvisor',
        question4: 'q4Book'
    },
    tinkerbell: {
        question1: 'q1Scold',
        question2: 'q2Sassy',
        question3: 'q3Talker',
        question4: 'q4Fabulous'
    },
    cogsworth: {
        question1: 'q1Scold',
        question2: 'q2Responsible',
        question3: 'q3Talker',
        question4: 'q4Book'
    },
    flounder: {
        question1: 'q1Scared',
        question2: 'q2Laidback',
        question3: 'q3BodyLanguage',
        question4: 'q4Swimming'
    },
    abu: {
        question1: 'q1Scared',
        question2: 'q2Sassy',
        question3: 'q3BodyLanguage',
        question4: 'q4Food'
    },
    abu: {
        question1: 'q1Scared',
        question2: 'q2Sassy',
        question3: 'q3BodyLanguage',
        question4: 'q4Food'
    },
    timonAndPumba: {
        question1: 'q1Scared',
        question2: 'q2Funny',
        question3: 'q3Singer',
        question4: 'q4Food'
    },
    timonAndPumba: {
        question1: 'q1Scared',
        question2: 'q2Laidback',
        question3: 'q3BodyLanguage',
        question4: 'q4Food'
    },
    baloo: {
        question1: 'q1Scared',
        question2: 'q2Laidback',
        question3: 'q3Singer',
        question4: 'q4Life'
    },
    olaf: {
        question1: 'q1Enable',
        question2: 'q2Funny',
        question3: 'q3Singer',
        question4: 'q4Life'
    },
    Mushu: {
        question1: 'q1Enable',
        question2: 'q2Funny',
        question3: 'q3Talker',
        question4: 'q4Fabulous'
    },
    Pegasus: {
        question1: 'q1Enable',
        question2: 'q2Sassy',
        question3: 'q3BodyLanguage',
        question4: 'q4Fabulous'
    },
    Meeko: {
        question1: 'q1Enable',
        question2: 'q2Sassy',
        question3: 'q3BodyLanguage',
        question4: 'q4Food'
    },
    Genie: {
        question1: 'q1Enable',
        question2: 'q2Funny',
        question3: 'q3Singer',
        question4: 'q4Life'
    },
    Villain: {
        question1: 'q1Villain',
        question2: 'q2Villain',
        question3: 'q3Villain',
    }
}; 

// Randomizer in case of multiple answers
    function randomSidekick(optionsArray) {
        const index = Math.floor(Math.random() * optionsArray.length);
        return optionsArray[index];
    }

// Selecting the form and user selected answers
    $('form').on('submit', function(e) {
        e.preventDefault();
        const userAnswers = {
            question1: $('input[name=question1]:checked').val(),
            question2: $('input[name=question2]:checked').val(),
            question3: $('input[name=question3]:checked').val(),
            question4: $('input[name=question4]:checked').val()
        };
        
        //the villain needs to take on whichever answer the user selects for the last question
        characters.Villain.question4 = userAnswers.question4;

        // Update DOM to remove the submit button
            $(".submitButton").remove();
        

        //Looping through character's array to retrieve objects
        for (let sidekick in characters) {
            const sidekickObjects = characters[sidekick];

            // converting objects into strings for better visual comparison while coding
            let sidekickObjectsString = JSON.stringify(sidekickObjects);
            let userAnswersString = JSON.stringify(userAnswers);

            if (sidekickObjectsString === userAnswersString) {
                const sidekickResult = `
                    <h3>${sidekick}<h3>
                `
                $('#sidekickResult').append(sidekickResult);
            } else {
                const disneyPrincess = `
                    <h3>You're not a sidekick, <br> You're a Disney princess!</h3>
                `
                $('#sidekickResult').append(disneyPrincess);
                { break; }
            };


        };


    });




});


