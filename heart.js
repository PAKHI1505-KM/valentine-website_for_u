setInterval(()=>{
const h=document.createElement("div");
h.innerHTML="❤";
h.style.position="fixed";
h.style.left=Math.random()*100+"vw";
h.style.bottom="0";
h.style.color="#ff4d88";
h.style.opacity=0.7;
document.body.appendChild(h);
setTimeout(()=>{h.style.bottom="100vh";h.style.opacity=0;},100);
setTimeout(()=>h.remove(),3000);
},350);
