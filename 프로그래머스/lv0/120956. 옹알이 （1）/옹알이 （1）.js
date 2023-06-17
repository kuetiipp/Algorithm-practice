function solution(babbling) {
    const baby = ["aya", "ye", "woo", "ma"];
    let newCase = ["aya", "ye", "woo", "ma"];
    let caseStr = "";
    let num = 0;
    //2
    for(let i = 0; i < baby.length; i++){
        for(let k = 0; k < baby.length; k++){
            if(i !== k){
                newCase.push(baby[i].concat(baby[k]));
            }
        }
    }
    //3
    for(let i = 0; i < baby.length; i++){
        for(let k = 0; k < baby.length; k++){
            if(i !== k){
                for(let j = 0; j < baby.length; j++){
                    if(k !== j && i !== j){
                        newCase.push(baby[i]+baby[k]+baby[j]);
                    }
                }
            }
        }
    }
    //4
    for(let i = 0; i < baby.length; i++){
        for(let k = 0; k < baby.length; k++){
            if(i !== k){
                for(let j = 0; j < baby.length; j++){
                    if(k !== j && i !== j){
                       for(let l = 0; l < baby.length; l++){
                           if(i !== l && k !== l && j !==l){
                           newCase.push(baby[i]+baby[k]+baby[j]+baby[l]);
                           }
                       }
                    }
                }
            }
        }
    }
    for(let i = 0; i < newCase.length; i ++){
        for(let k = 0; k < babbling.length; k++){
            if(newCase[i] === babbling[k]){
                num++;
            }
        }
    }
    
    console.log(newCase);
    return num;
}