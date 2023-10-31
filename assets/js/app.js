const cl= console.log;

const iconClick = document.getElementById("iconClick");
const showBar = document.getElementById("showBar");

const onClick = ()=>{
    showBar.classList.toggle("active");
}




iconClick.addEventListener("click", onClick);