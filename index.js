const loginAttempt = () => {
    let loginAttempt = 1;
    while (loginAttempt <= 3) {
        loginAttempt += 1;
        console.log("loginAttempt failed  ")
        if (loginAttempt > 3) {
            console.log("Account Locked! ");


        }


    }
};
loginAttempt();


const daysoftheweek = (days) => {
    days.forEach(daysoftheweek => {
        switch (daysoftheweek) {
            case 1:
                console.log("Sunday")
                break;
            case 2:
                console.log("Monday")
                break;
            case 3:
                console.log("Tuesday")
                break;
            case 4:
                console.log("Wednesday")
                break;
            case 5:
                console.log("Thursday")
                break;
            case 6:
                console.log("Friday")
                break;
            case 7:
                console.log("Sartuday")
                break;

            default:
                console.log("No such a day!")
                break;

        }
    });
}
let days = [1, 2, 3, 4, 5, 6, 7, 'text'];
daysoftheweek(days);



function checkPassword(password) {
    password.forEach(pass => {
        if (pass.length >= 8) {
            console.log("this is a strong password")
        }
        else {
            console.log("This is a weak password")
        }
    });
}
let password = ["12345hyj", "679likhn", 789, "kilaiop", "56yiokpoanhtrsfhyterd"]
checkPassword(password)


const languagescodes = (greetings) => {
    greetings.forEach(languagescodes => {
        switch (languagescodes) {
            case "en":
                console.log("Hello")
                break;
            case "fr":
                console.log("Bonjour")
                break;
            case "sw":
                console.log("Habari")
                break;
            default:
                console.log("Language not found!")
                break;

        }
    });
}
let greetings = ["en", "fr", "sw", "text"]
languagescodes(greetings)

function temperatureAlert(temperature) {
    temperature = temperature.map(temp => {
        if (temp > 30) {
            console.log("High heat alert!")
        }
        else if (temp < 15) {
            console.log("Cold alert!")
        }
        else {
            console.log("Normal conditions")
        }
    })
}
let temperature = [30, 40, 50, -1, -5, 21, 14]
temperatureAlert(temperature);

function registeringUsers(names) {
    while (names.length > 0) {
        let users = names.shift();
        console.log(`registered ${users}`);
        if (names.length == 0) {
            console.log("queue is empty!")
        }
    }
}
let names = ["linn", "Molly", "Tony", "capacity"]
registeringUsers(names)

function Retake(score) {
    let numberOfattempts = 1
    do {
        console.log(`Attempt ${numberOfattempts} :score is ${score}`);
        numberOfattempts++
        score += 10;

    }
    while (score <= 50)
    console.log("Test passed");

}

Retake(13)

function numberofVotes(votes) {
    let totalvotes = 1
    do {
        console.log(` The total votes are ${votes}`);
        totalvotes += 1
    }
    while (votes == 0)
    console.log("all votes are processed")

}

let votes = ["Yes", "No", "Yes", "No"]
numberofVotes(votes)




























