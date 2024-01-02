let color="black";
let size=16;

let click=true;

function changesize(gridsize){
    divmaker(gridsize);
    size=gridsize;
}
console.log(size)
function divmaker(gridsize){
    const main = document.querySelector("#rightbox");
    const divv = main.querySelectorAll("div");
    divv.forEach(function(divv){
        divv.remove();
    })
    main.style.gridTemplateColumns=`repeat(${gridsize},1fr)`;
    main.style.gridTemplateRows=`repeat(${gridsize},1fr)`;
    for(let i=0;i<(gridsize*gridsize);i++){
        let div1=document.createElement("div");
        div1.addEventListener("mouseover",style);
        
        div1.style.border="0.5px solid black";
        // main.insertAdjacentElement("beforeend",div1);  // same as append
        main.appendChild(div1)
    }
}
divmaker(16);

const clr=document.querySelector(".clear");
clr.addEventListener("click",function(){
    const main = document.querySelector("#rightbox");
    const divv = main.querySelectorAll("div");
    divv.forEach(function(divv){
        divv.style.backgroundColor='rgb(238, 233, 233)';
    })});


function style(){
    if(click){
        if(color ==='random'){
            this.style.backgroundColor=`hsl(${Math.random()*360},100%,50%)`;
        }else{
            this.style.backgroundColor=color;
        }
    }
}
function colorchange(choice){
        color=choice;
    }
document.querySelector("body").addEventListener("click",function(){
    click =!click;
})