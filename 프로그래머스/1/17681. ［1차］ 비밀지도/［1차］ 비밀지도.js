function solution(n, arr1, arr2) {
    let answer = [];
    let hashString ='';
    let arr1ToString2 = arr1.map((el)=>{
        let string = '';
        let length =el.toString(2).length;
        if(length < n){
            while(length < n){
            string+=0;
                length++;
        }
        return string+el.toString(2)
        }else{
            return el.toString(2);
        }
        
    })
    let arr2ToString2 = arr2.map((el)=>{
        let string = '';
        let length =el.toString(2).length;
        if(length < n){
            while(length < n){
            string+=0;
                length++;
        }
        return string+el.toString(2)
        }else{
            return el.toString(2);
        }
        
    })
    
    for(let i = 0; i< arr1ToString2.length; i++){
        for(let k = 0; k< arr1ToString2[i].length; k++){
            if(arr1ToString2[i][k] === '0' && arr2ToString2[i][k] === '0'){
                hashString += ' ';
            } else {
                hashString += '#';
            }
        }
        answer.push(hashString);
        hashString ='';
    }
    return answer;
}