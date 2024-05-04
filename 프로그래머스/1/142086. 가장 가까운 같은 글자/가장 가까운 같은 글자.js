function solution(s) {
    var answer = [-1];
    let findNear =[];
    let index = [];
    
    for(let i = 0; i < s.length-1; i++){
        findNear.push(s[i]);
        if(findNear.indexOf(s[i+1]) !== -1){
            for(let j = findNear.length -1; j >= 0; j--){
                if(s[i+1] === findNear[j]){
                    index.push(j);
                }
            }
            answer.push(i+1- index[0]);
            index=[];
        } else {
            answer.push(-1);
        }
    }
    
    return answer;
}