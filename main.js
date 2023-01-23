let scroller = document.getElementById("scroller");
let header = document.getElementById("header");






window.onscroll = function () {
    if(window.scrollY >= 200){
        header.style.display = "flex";
        scroller.style.display = "block"
    }else{
        header.style.display = "none";
        scroller.style.display = "none";
    }
}











scroller.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}