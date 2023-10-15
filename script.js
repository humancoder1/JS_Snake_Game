const game_Board = document.querySelector("#gameBoard");
const contx = game_Board.getContext("2d");
const score_Text = document.querySelector("#score");
const reset_Btn = document.querySelector("#reset-btn");
const game_Board_width = game_Board.clientWidth;
const game_Board_height = game_Board.clientHeight;
const game_Board_color = "aqua";
const snake_Color = "lightgreen";
const snake_Border = "black";
const food_Color = "red";
const unit_Size = 25; // size of the every unit of the body of the snake and food

let run = false; // to initiate the running of th game
let x_Vel = unit_Size; // velocity of the snake in the x direction
let y_Vel = 0; // velocity of the snake in y direction
let food_X; // x cordinates of the food particle 
let food_Y; // y coordinates of the food particle

let score = 0;// score variable for storing the points

let snake = [
    {x:unit_Size*4 , y:0},
    {x:unit_Size*3 , y:0},
    {x:unit_Size*2 , y:0},
    {x:unit_Size , y:0},
    {x : 0, y:0}
]


window.addEventListener("keydown",change_Direction);
reset_Btn.addEventListener("click" , reset_Game);

game_Start();

function game_Start(){};
function next_Sec(){};
function clear_Board(){};
function create_Food(){};
function draw_Food(){};
function move_Snake(){};
function change_Direction(){};
function check_GameOver(){};
function display_GameOver(){};
function reset_Game(){};




