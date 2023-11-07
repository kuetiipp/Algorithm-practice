function solution(n) {
    const numStr = String(n);
    const numArr = Array.from(numStr);

    const sum = numArr.reduce((a,b)=>{return Number(a)+Number(b)},0)
    
    return sum
}