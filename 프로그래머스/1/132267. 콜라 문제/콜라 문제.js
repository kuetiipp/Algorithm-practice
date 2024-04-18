function solution(a, b, n) {
    let answer = 0;
    while(a <= n){
    let redundancy = Math.floor(n % a);
        answer += Math.floor(n / a) * b;
            n = Math.floor(n / a) * b + redundancy;
    }
    return answer;
}