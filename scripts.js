function PrimoInferior(num){

    if (num < 2) return 0;

    var x = Math.floor(Math.sqrt(num));

    for (var i = 2; i <= x; i++){
        if (num % i == 0){
            return null;
        }
    }

    return x;
}

for(var i = 0; i < 30;i++){
    if(PrimoInferior(i)) document.write("<h3>Primo: ",i,"</h3>");
}