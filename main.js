const title = document.createElement("h1");
title.innerText = "Random Color generator using DOM"
document.body.appendChild(title);

const colorChangeBtn = document.createElement("button");
colorChangeBtn.innerText = "Change Color";
document.body.appendChild(colorChangeBtn);

function rng(){
    let randomNum = Math.floor(Math.random() * 256);
    return randomNum;
}

colorChangeBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = `rgba(${rng()}, ${rng()}, ${rng()})`;
    console.log(`${rng()}, ${rng()}, ${rng()}`);
})