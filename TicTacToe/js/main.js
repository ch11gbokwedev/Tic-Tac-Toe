let box = document.querySelectorAll(".box");
const firstOne = document.querySelector("#box0");
const firstTwo = document.querySelector("#box1");
const firstThree = document.querySelector("#box2");
const secondOne = document.querySelector("#box3");
const secondTwo = document.querySelector("#box4");
const secondThree = document.querySelector("#box5");
const thirdOne = document.querySelector("#box6");
const thirdTwo = document.querySelector("#box7");
const thirdThree = document.querySelector("#box8");
let result = document.querySelector("#result");




// box.forEach(el =>{
//   el.addEventListener('click',function(){
//     if (this.textContent==""){
//       game.changePlayer()
//       let playerWhat = document.createTextNode(gameRules.icon)
//       this.appendChild(playerWhat)
//       game.counter++
//       game.checkResult()
//
// console.log(game.counter)
//     }
//
//   })
// })
//
// const gameRules = {
//   move: 1,
//   icon: "x",
//   counter: 0,
//   playerChange: function (){
//     if(this.turn % 2 === 0){
//       this.icon = "o"
//     }else{
//       this.icon = "x"
//     }
//     this.turn++
//   },
//   winAlert: function(){
//     let alertBox = document.createTextNode(`player ${this.icon} won!`);
//     result.appendChild(alertBox);
//     setTimeout("location.reload(true);", 5000);
//     box.removeEventListener('click');
//   },
//   checkResult: function(){
//     if(firstOne.textContent)
//   }
// }
