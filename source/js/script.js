var burger = document.querySelector(".menu-button");
var menu = document.querySelector(".page-navigation");
var modal = document.querySelector(".modal-add");
var modalBtn = document.querySelectorAll(".modal-show");

menu.classList.add("page-navigation--close");
burger.classList.add("menu-button--close");

burger.addEventListener ("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("page-navigation--close");
  burger.classList.toggle("menu-button--close");
});

for (var i=0; i <= (modalBtn.length-1); i++) {
  modalBtn[i].addEventListener ("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-add--close");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode == 27) {
    evt.preventDefault();
    modal.classList.add("modal-add--close");
  }
});
