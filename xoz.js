
let s="x"
let p = "x";
let p1="x"
let p2="o"
let x = "0";
let spl1=0;
let spl2=0;
let px="0";
let test=true

function move(ch) {
    test=false
    document.getElementById("p1").innerHTML = p1
    document.getElementById("p2").innerHTML = p2
    document.getElementById("sc1").innerHTML = spl1
    document.getElementById("sc2").innerHTML = spl2;
    setInterval(bigcolor, 100)
    if (verif(ch)) {
        changecolor(x)
        document.getElementById(ch).innerHTML = p;
        smallcolor(ch,p)
        ch1=ch[0]
        
        if (verifsmall(ch1)) {
            document.getElementById(ch1).innerHTML = p;

            if(verifbig()){
                alert(p + " : won");
                if (p === p1) {
                    spl1++;   
                } else {
                    spl2++;

                }   
                ;
            }
        }
        change()
        
        c=document.getElementById(ch[1]).innerHTML
        if (c=="o" || c=="x"){
            x="0";
        }
        else{ x = ch[1];}
        changecolor(x)
        
    } else {
        alert("The place is wrong");
    }
    
}
function change(){
    if (p === "x") {
        p = "o";
    } else {
        p = "x";
    }
}

function verif(ch) {
    let div = document.getElementById(ch).innerHTML;

    if ((ch[0] === x || x === "0") && div === "") {
        return true;
    } else {
        return false;
    }
}


function verifsmall(ch) {
    let dd1 = document.getElementById(ch + "1").innerHTML;
    let dd2 = document.getElementById(ch + "2").innerHTML;
    let dd3 = document.getElementById(ch + "3").innerHTML;
    let dd4 = document.getElementById(ch + "4").innerHTML;
    let dd5 = document.getElementById(ch + "5").innerHTML;
    let dd6 = document.getElementById(ch + "6").innerHTML;
    let dd7 = document.getElementById(ch + "7").innerHTML;
    let dd8 = document.getElementById(ch + "8").innerHTML;
    let dd9 = document.getElementById(ch + "9").innerHTML;

    if (dd1 === dd2 && dd2 === dd3 && dd1 !== "") {return true};
    if (dd4 === dd5 && dd5 === dd6 && dd4 !== "") {return true};
    if (dd7 === dd8 && dd8 === dd9 && dd7 !== "") {return true};
    if (dd1 === dd4 && dd4 === dd7 && dd1 !== "") {return true};
    if (dd2 === dd5 && dd5 === dd8 && dd2 !== "") {return true};
    if (dd3 === dd6 && dd6 === dd9 && dd3 !== "") {return true};
    if (dd1 === dd5 && dd5 === dd9 && dd1 !== "") {return true};
    if (dd3 === dd5 && dd5 === dd7 && dd3 !== "") {return true};
    return false;
}
function verifbig() {
    let d1 = document.getElementById("1").innerHTML.trim();
    let d2 = document.getElementById("2").innerHTML.trim();
    let d3 = document.getElementById("3").innerHTML.trim();
    let d4 = document.getElementById("4").innerHTML.trim();
    let d5 = document.getElementById("5").innerHTML.trim();
    let d6 = document.getElementById("6").innerHTML.trim();
    let d7 = document.getElementById("7").innerHTML.trim();
    let d8 = document.getElementById("8").innerHTML.trim();
    let d9 = document.getElementById("9").innerHTML.trim();

    if (d1 === d2 && d2 === d3 && d1 !== "") return true;
    if (d4 === d5 && d5 === d6 && d4 !== "") return true;
    if (d7 === d8 && d8 === d9 && d7 !== "") return true;

    if (d1 === d4 && d4 === d7 && d1 !== "") return true;
    if (d2 === d5 && d5 === d8 && d2 !== "") return true;
    if (d3 === d6 && d6 === d9 && d3 !== "") return true;

    if (d1 === d5 && d5 === d9 && d1 !== "") return true;
    if (d3 === d5 && d5 === d7 && d3 !== "") return true;

    return false;
}

function restart() {
    fetch('xozsa.html')
        .then(response => response.text()) 
        .then(data => {

            document.open(); 
            document.write(data);  
            document.close(); 
        })
        .catch(error => console.error('Error loading file2.html:', error));
    x="0"
    p = "x";
    test=true
    
    }
    function changecolor(x) {
    
        if (px !== "0" && px !== "") {
            document.getElementById(px).style.backgroundColor = "black";
        }
        if (x !== "0" && x !== "") {
            document.getElementById(x).style.backgroundColor = "gray";
        }
        px = x;
    }
function smallcolor(ch,p){
    console.log(ch)
    if(p==p1){
        document.getElementById(ch).style.backgroundColor = "blue"

    }
    if(p==p2){document.getElementById(ch).style.backgroundColor = "red"}


}    
function bigcolor() {
    for (let i = 1; i <= 9; i++) { 
        let div = document.getElementById(i);
        if (div) { 
            let content = div.innerHTML.trim();
            if (content === p1) {
                div.style.backgroundColor = "blue";
            } else if (content === p2) {
                div.style.backgroundColor = "red"; 
            } 
        }
    }
}
function switchPlayer() {
    if(test){
    if (p1 === "x") {
        p1 = "o";
        p2 = "x";
        p="x"
    } else {
        p1 = "x";
        p2 = "o";
        p="x"
    }
    }}

    