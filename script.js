var timer = 30
var score = 0
var newhit ;


function scoremark(){
    score +=10
    document.querySelector("#scoreval").textContent = score
}

function makebubble(){  
var culster="";
for(let i=1;i<=133;i++){
 var fr = Math.floor(Math.random()*10)
  culster += ` <div class="bubble">${fr}</div>`
}
document.querySelector("#pbtm").innerHTML=culster
}

function  runtimer(){
   var timeint= setInterval(() => {
        if(timer>0){
            timer --;
        document.querySelector("#timeval").textContent=timer
        }
        else{
            clearInterval(timeint)
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`
            document.querySelector("#pbtm").innerHTML=`<p>your Score ${score}</p>`
        }
    }, 1000);
}

function  hitmark(){
    newhit=Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = newhit
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent)
     if(clickednum===newhit){
        scoremark()
        makebubble()
        hitmark()
     }
})


makebubble()
runtimer()
hitmark()
