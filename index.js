<<<<<<< HEAD
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
=======
function writeCards(arr,event){
    Card=[];
    for(let i=0;i<arr.length;i++){
        Card[i]="Thank you,"+arr[i]+" for the wonderful "+event+" gift!";
       
    }
        console.log(Card);
}
writeCards(["Mohammed", "Amro", "Adeeb"],"birthday");

/* ///////////////////////////////////////////While//////////////////////////////////////*/
function countdown(Num){
    i=Num;
>>>>>>> c065ff9c00fbe8833dbe2445385e70a5a64c01c5
    while(i>=0){
        console.log(i);
        i--;
    }
}
countdown(10);