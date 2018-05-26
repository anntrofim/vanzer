var btnCatInd = document.getElementById("btnCatInd");
var btnCatWeb = document.getElementById("btnCatWeb");
var btnCatPhoto = document.getElementById("btnCatPhoto");

var catInd = document.getElementById("catInd");
var catWeb = document.getElementById("catWeb");
var catPhoto = document.getElementById("catPhoto");



function showCat(cat) {
cat.classList.add("visible");
}
function hideCat(cat1, cat2) {
cat1.classList.remove("visible");
cat2.classList.remove("visible");
}



btnCatInd.addEventListener("click", function(){
showCat(catInd);
hideCat(catWeb, catPhoto);
});

btnCatWeb.addEventListener("click", function(){
showCat(catWeb);
hideCat(catInd, catPhoto);
});

btnCatPhoto.addEventListener("click", function(){
showCat(catPhoto);
hideCat(catInd, catWeb);
});
