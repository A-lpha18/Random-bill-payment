function billPay(){
    var f1=document.getElementById("name1").value;
    var f2=document.getElementById("name1").value;
    var f3=document.getElementById("name1").value;
    var f4=document.getElementById("name1").value;
    var f5=document.getElementById("name1").value;

    var name=[f1,f2,f3,f4,f5];
    var n=Math.random();
    n=n*4;
    var numberofPerson=Math.floor(n);
    if(numberofPerson=0){
        document.getElementById("print").innerHTML=f1+" will pay the bill";
    }
    else if(numberofPerson=1){
        document.getElementById("print").innerHTML=f2+" will pay the bill";
    }
    else if (numberofPerson=2){
        document.getElementById("print").innerHTML=f3+" will pay the bill";
    }
    else if(numberofPerson=3){
        document.getElementById("print").innerHTML=f4+" will pay the bill";
    }
    else if(numberofPerson=4){
        document.getElementById("print").innerHTML=f5+" will pay the bill";
    }
}
function reload(){
    location.reload();
}