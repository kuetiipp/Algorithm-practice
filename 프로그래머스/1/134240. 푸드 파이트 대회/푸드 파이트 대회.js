function solution(food) {
    let foods ='';
    let water = '0';
    
    const reverser = (string)=>{
        const foodsReverseArr = string.split('');
        const sdoof = foodsReverseArr.reverse().join('');
        return sdoof;
    }
    
    
    for (let i = 1; i < food.length; i++){
        let repeat = Math.floor(food[i]/2);
        let n =1;
        while(n <= repeat){
            foods += i;
            n++;
        }
    }
    return foods+water+reverser(foods);
}