var item1 = document.getElementByClass("flex-item1");

item1.addEventListener ("mouseover", function() {
  item1.style.backgroundColor = "#D6172A";
  item1.style.animationFillMode = "none";
});

function changeBackground(color) {
   document.body.style.background = color;
}

window.addEventListener("click",function() { changeBackground('red') });
