function solution(t, p) {
    let pLength = p.length;
    let newArr = [];
    let answer = 0;
    
    for (let i = 0; i + pLength < t.length + 1; i++){
        newArr.push(t.substr(i, pLength));
    }
    
    for (let i = 0; i < newArr.length; i++){
        if(newArr[i] <= Number(p)){
            answer++
        }
    }
    return answer;
}