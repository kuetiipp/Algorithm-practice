function solution(k, m, score) {
    let answer = [];
    let arr = [];
    let result = 0;
    score.sort(function(a,b){
        return b - a;
    })
    for(let k = 0; k < score.length; k++){
        arr.push(score[k]);
        if(0 < k && (k+1) % m === 0){
           answer.push(arr);
            arr=[];
        }
    }
    for(let i = 0; i< answer.length; i++){
       result += answer[i][answer[i].length-1] * m;
    }
    return result;
}