function billPay(){
    var f1=document.getElementById("name1").value;
    var f2=document.getElementById("name1").value;
    var f3=document.getElementById("name1").value;
    var f4=document.getElementById("name1").value;
    var f5=document.getElementById("name1").value;

    var name=[f1,f2,f3,f4,f5];
    var numberofName=name.length;
    var n=Math.random();
    n=n*4;
    var numberofPerson=Math.floor(n);
    console.log(n);
}