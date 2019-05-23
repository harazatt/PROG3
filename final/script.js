
//  let matrix = [];
let side = 25;
var socket = io();

function setup() {

// 34
    createCanvas(34* side, 34* side); 
    background('#acacac');

   
    
}



function drawMatrix(obj) {
    matrix = obj.matrix;
    season = obj.s;

    //Գծում է աշխարհը, հիմվելով matrix-ի վրա
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                if(season == "winter"){
                    fill("white");

                }
                else {
                    fill("green");

                }
                rect(j * side, i * side, side, side);

            } 
           
      
        else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill("red");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4) {
                fill("#3e2768");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
               if (season == "winter"){
                   fill("black")
               }
                else {fill("blue");}
                rect(j * side, i * side, side, side);
            }
        }
    }
}
// function changeWeather(season){

    // document.getElementById("weather").innerHTML = season;

// }
socket.on("ugharkum em matrixy", drawMatrix);
// socket.on("changeW", changeWeather)


function pushEatgrass(){
    socket.emit("push Eatgrass")
}
function killAll(){
    socket.emit("push All")
}
function Bomb(){
    socket.emit("bomb")
}

function XotAvelacnel(){
    socket.emit("xot avelacnel")
}
function XotakerAvelacnel(){
    socket.emit("xotaker avelacnel")
}
function GishatichAvelacnel(){
    socket.emit("gishatich avelacnel")
}
function GazanAvelacnel(){
    socket.emit("gazan avelacnel")
}
function MardAvelacnel(){
    socket.emit("mard avelacnel")
}