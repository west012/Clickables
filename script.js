// // console.log("Hello World!")


// let screen = document.querySelector('.screen');
// screen.setAttribute("style","color: Indigo");

// let switcher= document.createElement('button');

// screen.appendChild(switcher);
// switcher.innerText = 'clapOn.js';


// switcher.addEventListener('click', difButton);


// function difButton(){
    
//     screen.setAttribute('style','color: red');
// }
difButton();
let screeen = document.querySelector('.screen');
let allButtonArray = document.querySelectorAll('li');

let currentText='';



function addAllListeners(param){
    for (let i = 0; i <param.length; i++){
        param[i].addAllListeners('click',change);
    }
}

addAllListeners(allButtonArray);

function change(param){
    if(param === undefined){
        screen.innerHTML = 'Do Math';
    }else{
        currentText =currentText + param.target.innerHTML;
        screen.innerHTML = currentText;
    }
}
console.log(currentText);

change(4);
change(50);
change(8);