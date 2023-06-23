function solution(babbling) {
    const baby = ["aya", "ye", "woo", "ma"];
    let newCase = new Map();
    let num = 0;
    
    function duple(arr){
        newCase.set(arr.join(''), true);
        for(let i = 0; i < baby.length; i++){
            if(arr.includes(baby[i]) === false){
                let newArr = [...arr];
                newArr.push(baby[i]);
                duple(newArr);
            }
        }
    }
    duple([]);
    for(let i = 0; i < babbling.length; i++){
        if(newCase.has(babbling[i])){
            num++;
        }
    }
    return num;
}