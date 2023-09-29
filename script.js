//your JS code here. If required.
function getSize(){
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    var output = document.getElementById("sizeInfo");
    output.innerHTML = "<h1>Width: " + width + " and Height: " + height + "</h1>";
}