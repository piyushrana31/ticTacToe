let resetButton = document.querySelector(".rst-btn");
let newButton = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let boxes = document.querySelectorAll(".box");

let turnX = true;
let count=0;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => { 
    box.addEventListener("click", () =>{
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }else{
            box.innerText = "O";
            turnX = true;
        }

        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if(count===9 && !isWinner){
            gameDraw();
        }

    });
});

const checkWinner = (winner) => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val===pos2Val && pos2Val===pos3Val){
            if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
                showWinner(pos1Val);
                return true;
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const gameDraw = () => {
    msg.innerText = `Draw(Tough Competition)`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const resetGame = () => {
    turnX = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

newButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);