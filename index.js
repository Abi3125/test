function getDice1(){
    var dice1 = Math.floor(Math.random()*155);
    var dice2 = Math.floor(Math.random()*3);
    var dice3 = Math.floor(Math.random()*2);
    document.getElementById('condice1').innerHTML = (dice1+1);
    document.getElementById('condice2').innerHTML = (dice2+1);
    document.getElementById('condice3').innerHTML = (dice3+1);
}
