import startMove from "../myPackages/sherry-move";
let div = document.getElementById("div");
// alert(123)
startMove(div,{"width":"300"},function () {
    startMove(div,{"height":"300"})
})