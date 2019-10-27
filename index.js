let Card=[];
function writeCards(Arr,event){
    
    for(let i=0;i<Arr.length;i++){
        Card[i]='Thank you, '+Arr[i]+', for the wonderful '+event+' gift!';
       
    }
       
       return Card;
}
 

writeCards(['Ali', 'Mohammed', 'Amro'],'birthday');
 console.log(Card);
function countdown(Num){
    let i=Num;
    while(i>=0){
        console.log(i);
        i--;
    }
}
countdown(10);