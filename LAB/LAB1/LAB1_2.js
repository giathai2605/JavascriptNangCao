const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    odds: [1.33, 3.25, 6.5],
    scored: [
        { name: "Gnarby", goals: 1 },
        { name: "Hummels", goals: 1 },
        { name: "Lewandowski", goals: 2 }
    ]
};

// Loop through the scored array and print out the player and number of goals they scored
for (let i = 0; i < game.scored.length; i++) {
    console.log(`Goal ${i + 1}: ${game.scored[i].name}`);
}

// Calculate the average score of the game and print to the console
let totalGoals = 0;
for (let i = 0; i < game.scored.length; i++) {
    totalGoals += game.scored[i].goals;
}
let averageScore = totalGoals / game.scored.length;
console.log(`Average score: ${averageScore}`);

// Print the odds in a formatted way
console.log(`Tỉ lệ thắng của ${game.team1}: ${game.odds[0]}`);
console.log(`Tỉ lệ hòa of draw: ${game.odds[1]}`);
console.log(`Tỉ lệ thắng của ${game.team2}: ${game.odds[2]}`);

// Create a new object 'scorers' with the player names as keys and number of goals as values
const scorers = {};
for (let i = 0; i < game.scored.length; i++) {
    scorers[game.scored[i].name] = game.scored[i].goals;
}
console.log(scorers);
