// 1. GenBuzz Function

//Write your code below this line:
const genBuzz = (lowerLimit, upperLimit) => {
    if (typeof lowerLimit === 'number' && typeof upperLimit === 'number') {

        if (lowerLimit < upperLimit) {

            for (let myNumber = lowerLimit; myNumber <= upperLimit; myNumber++) {

                myNumber % 3 === 0 && myNumber % 5 === 0
                    ? console.log("Genbuzz")
                    : myNumber % 3 === 0
                        ? console.log("Gen")
                        : myNumber % 5 === 0
                            ? console.log("Buzz")
                            : console.log(myNumber);
            }



        } else {
            console.log(`Careful! ${lowerLimit} is larger than ${upperLimit}.`);
        }
    } else {
        console.log(`${lowerLimit} or ${upperLimit} is not a number.`);
    }
}

genBuzz(2, 15);
genBuzz(12, 6);
genBuzz("hello", 6);


// 2. Leap Year

//Write your code below this line:

const leapYear = year => {


    if (year % 400 === 0) {
        console.log(`${year} is a leap year.`);

    } else if (year % 100 === 0) {
        console.log(`${year} is not a leap year.`);

    } else if (year % 4 === 0) {
        console.log(`${year} is a leap year.`);

    } else {
        console.log(`${year} is not a leap year.`);
    }
}

leapYear(1600);
leapYear(1800);
leapYear(2005);
leapYear(2004);





// 3. Random Exercises
//Push-ups, Sit-ups, Bear Crawls, 1 mile run, 60 second plank, Burpees, Jumping Jacks, Squats, Weighted Squats, Inch Worms

//Write your code below this line:
const exercises = ['Push-ups', 'Sit-ups', 'Bear Crawls', '1 mile run', '60 second plank', 'Burpees', 'Jumping Jacks', 'Squats', 'Weighted Squats', 'Inch Worms']

const randomExercises = numOfExercises => {

    for (let i = 0; i < numOfExercises; i++) {
        let randomNumber = Math.floor(Math.random() * exercises.length);
        console.log(`${i + 1}: ${exercises[randomNumber]}.`);

    }
}

randomExercises(6);
randomExercises(0);
randomExercises(12);

// 4. Perfect Square

//Write your code below this line:

const perfectSquare = (num) => {
    for (let i = 1; i < num; i++) {
        if (i * i === num) {
            console.log(`$`) //return true?
        }
    }
}