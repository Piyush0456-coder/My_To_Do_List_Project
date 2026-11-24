// STEP 1 FOR CREATING ALL ELEMENT FOR USING IN THE CODE
let boxes = document.querySelectorAll(".box");
// let boxes = document.getElementsByClassName("box");
let reset_btn = document.querySelector("#reset-btn");
let win_msg = document.querySelector("#win_msg");
// console.log(win_msg);
let turnO = true;

// WINNING PATTERN FOR Win the game in diagnoal,vertical,horizontal 
let win_pattern = [
    [0,1,2],            //2D array for winning pattern 
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];  

//Functions list for game
// 1.show text of wining in div(win_mst)
const showWinner = (winner) =>{
    win_msg.innerText = `CONGRATULATIONS Winner is ${winner}!!!!!`;

    //for disabling boxes after winning !
    for (let box of boxes){
        box.disabled = true;
    }
    win_msg.classList.remove("hide");    
}



//2.function on click on Reset button
//reset button function for click function
const reset_game = () =>{
    console.log("Reset button is clicked !");
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
    //adding class of hide when reset button is clicked
    win_msg.classList.add("hide");
}
//Event handling on click on reset btn
reset_btn.addEventListener("click",reset_game);

//3.for winner function
// assining of valus of pos 0,1,2 for checking wininng pattern is matching or not
const forwinner = () =>{
    for(let pattern of win_pattern){
        // console.log(pattern[0], pattern[1]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]]);
        let pos0 = boxes[pattern[0]].innerText;
        let pos1 = boxes[pattern[1]].innerText;
        let pos2 = boxes[pattern[2]].innerText;

    if(pos0 !="" && pos1 !="" && pos2 !=""){
            if(pos0===pos1 && pos1===pos2 ){
                console.log("winner is ",pos0);
                showWinner(pos0);
                boxes.disabled = true;
                
            }
        }
    }
}

// Event on click for Printing X or O on click
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerHTML="X";
            turnO = false;
        }
        else{
            box.innerHTML="O";
            turnO=true;
        }
        // for disabling the button after one click
        box.disabled= true;
        forwinner();        // function for winner checking 
    })
});


