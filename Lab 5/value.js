let teams = ['Eagles', 'Swans', 'Dockers', 'Hawks', 'Bulldogs'];
let Swans = 4;
let Bulldogs = 1;

let temp = teams[1];
teams[1] = teams[4];
teams[4] = temp;

console.log(teams);
