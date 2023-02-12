
printGoals(...game.scored);

// Refactored code: 
const game = {
    team1: {
        name: "Bayern Munich",
        players: ["Neuer", "Davies", "Boateng", "Alaba", "Kimmich", "Goretzka", "Muller", "Coman", "Gnabry", "Lewandowski", "Coutinho"],
    },
    team2: {
        name: "Borussia Dortmund",
        players: ["Burki", "Meunier", "Akanji", "Hummels", "Guerreiro", "Witsel", "Delaney", "Reyna", "Sancho", "Haaland", "Brandt"],
    },
    odds: {
        team1: 2.10,
        draw: 3.20,
        team2: 3.75,
    },
    scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich'],
};

//Hủy cấu trúc đối tượng odds và gán nó cho các biến

const { team1, draw, team2 } = game.odds;

// Used spread syntax to combine both teams' players into one array 

const allPlayers = [...game.team1.players, ...game.team2.players];

// Used spread syntax to add additional players to the first team's array 

const players1Final = [...game.team1.players, 'Thiago', 'Coutinho', 'Perisic'];

// Created a function that prints out goals scored by each player in the scored array using spread syntax and forEach loop  

const printGoals = (...scored) => { console.log(`Goals scored by ${scored.length} players:`); scored.forEach((player) => console.log(`- ${player}`)); };

// Used reduce method to find the winning team based on odds object values  

const winningTeam = Object.entries(game.odds).reduce((a, b) => (a[1] < b[1] ? a : b))[0]; console.log(`Winning team is ${winningTeam}`);