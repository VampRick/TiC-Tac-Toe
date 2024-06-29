let boxes=document.querySelectorAll(".btn");
let button=document.querySelector(".restart");
let turnO=true;
let winningpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
];
boxes.forEach((btn) => {
    btn.addEventListener("click",() => {
        console.log("clicked");
        if(turnO){
            btn.innerHTML="X";
            turnO=false;
        }else{
            btn.innerHTML="O";
            turnO=true;
        }
        btn.disabled=true;
        checkwinner();
        
    });

});


let offbuttons=() => {
    for(let each of boxes){
        each.disabled=true;
    }
}
let newstart=() => {
    turnO=true;
    for(let each of boxes){
        each.innerText="";
        each.disabled=false;
        document.getElementById("msg").innerText="";
        check=0;
        check2=0;
    }
}
var check=0;
var check2=0;
let checkwinner=() => {
    for(let patterns of winningpattern){
        let val1=boxes[patterns[0]].innerHTML;
        let val2=boxes[patterns[1]].innerHTML;
        let val3=boxes[patterns[2]].innerHTML;
        if(val1!="" && val2!="" && val3!=""){
            if(val1==val2 && val2==val3){
                console.log("winner",val1);
                document.getElementById("msg").innerText="Congrats, You are the Winner";
                offbuttons();
                check=1;
                console.log(check);
            }
            else{
                check2++;
            }
        }
        if(check==0 && check2==18){
            document.getElementById("msg").innerText="Sorry that's a Tie";
        }
    }
    
}
button.addEventListener("click",newstart);