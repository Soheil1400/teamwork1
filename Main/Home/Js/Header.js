function showMenu() {
    let list = document.getElementById("navList");
    if (list.style.display=== "block"){
        list.style.display= "none"
    } else list.style.display= "block"
}
$(function () {
    let list = document.getElementById("header");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            list.classList.add("sticky");
        } else {
            list.classList.remove("sticky")
        }
        if ($(this).scrollTop() > 100) {
            list.classList.add("inView");
        } else {
            list.classList.remove("inView")
        }
    })
});