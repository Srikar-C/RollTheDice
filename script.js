t()
function t() {
  let name1 = prompt("Enter Player 1 Name: ");
  if (name1 == null || name1 == "") {
    let na1 = prompt("Please Enter Player 1 Name to Enter into the Game: ");
    document.getElementById("p1").innerHTML = na1;
  }
  else {
    document.getElementById("p1").innerHTML = name1;
  }
  let name2 = prompt("Enter Player 2 Name: ");
  if (name2 == null || name2 == "") {
    let na2 = prompt("Please Enter Player 2 Name to Enter into the Game: ");
    document.getElementById("p2").innerHTML = na2;
  }
  else {
    document.getElementById("p2").innerHTML = name2
  }
}
function roll(){
  var r1=Math.floor(Math.random()*6)+1;
  var r2=Math.floor(Math.random()*6)+1;
  document.querySelector(".img1").setAttribute("src","dice"+r1+".png");
  document.querySelector(".img2").setAttribute("src","dice"+r2+".png");
  if(r1===r2){
    document.getElementById("winner").innerHTML="DRAW";
  }
  else if(r1>r2){
    document.getElementById("winner").innerHTML="The Player 1 Wins";
  }
  else{
    document.getElementById("winner").innerHTML="The Player 2 Wins";
  }
}
