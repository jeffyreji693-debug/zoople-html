let num=5
for(let i=1;i<=num;i++){
    for(let j=1;j<=i;j++){
        document.writeln('*')
    }
    document.writeln("<br>")
}


 document.writeln("<br>")

for(let i=1;i<=num;i++){
    for(let j=1;j<=i;j++){
        document.writeln(j)
    }
    document.writeln("<br>")
}

 document.writeln("<br>")

for(let i=1;i<=num;i++){
    for(let j=1;j<=i;j++){
        document.writeln(i)
    }
    document.writeln("<br>")
}

 document.writeln("<br>")

for(let i=num;i>=1;i--){
    for(let j=1;j<=i;j++){
        document.writeln('*')
    }
    document.writeln("<br>")
}

 document.writeln("<br>")

for(let i=num;i>=1;i--){
    for(let j=1;j<=i;j++){
        document.writeln(i)
    }
    document.writeln("<br>")
}

for(let i=num;i>=1;i--){
    for(let j=1;j<=i;j++){
        document.writeln(j)
    }
    document.writeln("<br>")
}

document.writeln("<br>")

for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        document.writeln('*')
    }
    document.writeln("<br>")
}


document.writeln("<br>")
// hollow square

for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
    if(i==1||j==1||i==num||j==num){
        document.writeln('*')
    }else{
         document.writeln("&nbsp;&nbsp")
    }
    }
    document.writeln("<br>")
}

document.writeln("<br>")

let n=7
let pattern = "";
//Top half
for(let i=n; i>=1; i-- ){
    for (let j =0; j<n - i; j++){
        pattern += "&nbsp;";
    }
    for(let k=1; k<=i; k++){
        pattern += "*&nbsp;";
    }
    pattern += "<br>";
}

//bottom half
for(let i=2; i<=n; i++ ){
    for (let j =0; j<n - i; j++){
        pattern += "&nbsp;";
    }
    for(let k=1; k<=i; k++){
        pattern += "*&nbsp;";
    }
    pattern += "<br>";
}

document.write(pattern)






