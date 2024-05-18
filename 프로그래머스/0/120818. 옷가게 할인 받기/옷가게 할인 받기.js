function solution(price) {
    const oneHundredThousands = 100000;
    const thirtyHundredThounsands = 300000;
    const fiftyHunderedThousands =500000;
    
    if(oneHundredThousands <= price && price < thirtyHundredThounsands){
        return Math.floor(price - (price* 0.05));
    } else if(thirtyHundredThounsands <= price && price < fiftyHunderedThousands){
        return Math.floor(price - (price * 0.1));
    } else if(fiftyHunderedThousands <= price){
        return Math.floor(price - (price * 0.2));
    } else {
        return price;
    }
}