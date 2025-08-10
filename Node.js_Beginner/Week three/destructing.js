const user = {
    name: "Ashraf Ben Sharqy",
    age: 29,
    teams: ["Wydad", "Al Hilal", "Zamalek", "Al Gazira", "Al-Rayyan"],
    nationalTeam: {
        name: "Morroco",
        best: {
            africanCupOfNations: ["Champion", 2018],
            worldCup: ["4th", 2022],
        }
    }
}

const {teams:[,,three],nationalTeam:{best:{worldCup:[first]}}}=user;
console.log(three); 
console.log(first);
