const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    let answer = '';
    for(let i = 0; i < line.length; i++){
        if(97<= line[i].charCodeAt() && line[i].charCodeAt() <= 122){
            answer += line[i].toUpperCase();
        }else{
            answer += line[i].toLowerCase();
        }
    }
    input.push(answer);
}).on('close',function(){
    str = input[0];
    console.log(str)
});