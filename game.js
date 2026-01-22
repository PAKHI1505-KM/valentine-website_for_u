let cat=document.getElementById("cat");
let score=0;

function move(){
cat.style.left=Math.random()*200+"px";
cat.style.top=Math.random()*150+"px";
}

cat.onclick=()=>{
score++;
document.getElementById("score").innerText=score;
if(score===5) alert("You caught my heart 🖤");
move();
};

setInterval(move,1200);
