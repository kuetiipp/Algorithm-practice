function solution(k, score) {
    let arr = [];
    let answer = [];
    
    for (let i = 0; i < score.length; i++){
        if(arr.length < k){
            arr.push(score[i]);
        }else {
            if(arr[0] < score[i]){
                arr.shift();
                arr.push(score[i])
            }
        }
        arr.sort(function(a, b)  {
  return a - b;
});
        answer.push(arr[0])
    }
    return answer;
}