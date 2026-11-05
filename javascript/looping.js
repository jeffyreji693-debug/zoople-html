 // // for loop

//  for (intialize;condition;incre/decre)
// //1-10 numbers

for(let i=1;i<=10;i++){
    console.log(i);
    document.write(i, '<br>')
}
for(let i=10;i>=1;i--){
    console.log(i);
    document.write(i, '<br>')
}

// even number
for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    document.write(i,'<br>')
    } 
}

// odd number
for(let i=1;i<=20;i++){
    if(i%2!==0){
        console.log(i);
    document.write(i,'<br>')
}        
}

// sum of numbers
let sum=0
for(let i=10;i>=1;i--){
    sum=sum+i  //sum+=i
}
console.log("sum",sum);
document.write("sum",sum,'<br>')

// multiplication
for(let i=1;i<=10;i++){
console.log(i*5);
document.write(i, '*', '5','=', i*5, '<br>')
}


//while (condition). execute

let i=1
while(i<=10){
    console.log(i);
    document.write(i, '<br>')
    i++
    
}
let j=10
while(j>=1){
    console.log(j);
    document.write(j, '<br>')
    j--
}

//exit controlled loop
let num=1
do{
    console.log(num);
    document.write(num)
    num++
    }while(num<=10);
    



