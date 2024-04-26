function solution(str1, str2) {
    
    let str = '';
    let strArr = [];
    const str1Arr = str1.split('');
    let index = [];
    
    for(let i = 0; i < str1Arr.length; i++){
        if(str2[0] === str1Arr[i]){
            index.push(i)
        }
    }
    
    for(let k = 0; k < index.length;){
         for(let i = index[k]; i < str1Arr.length; i++){
            for(let i = index[k]; i < index[k] + str2.length; i++){
                str += str1Arr[i];
            }
            strArr.push(str);
            str = '';
             k++;
        }
    }
       
    
    if(strArr.indexOf(str2) !== -1){
        return 1;
    }else{
        return 2;}
    
}