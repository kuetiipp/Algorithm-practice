function solution(name, yearning, photo) {
    
    let missingScore = {};
    let answer = 0;
    let result =[];
    
    for (let i = 0; i < yearning.length; i++){
        missingScore[name[i]] = yearning[i];
    }
    
    for(let i = 0; i < photo.length; i++){
        for(let l = 0; l < photo[i].length; l++){
            if(photo[i][l] in missingScore){
            answer += missingScore[photo[i][l]];
            }
        }
        result.push(answer)
        answer = 0;
    }
    return result;
}