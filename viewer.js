var picLength;
window.onload = function (){

    var myImg = [];
    var myNo = document.getElementById("no");
    var myPict = document.getElementById("pict");
    var revBtn = document.getElementById("rev_btn");
    var fwdBtn = document.getElementById("fwd_btn");
    var slideShow = document.getElementById("slideShow");
    var idx = 3;

    for(var i = 0; i < 4; i++){
        myImg[i] = document.createElement("img");
        myImg[i].src = "img/" + ( i + 1 ) + ".jpg";
        slideShow.appendChild(myImg[i]);
    }
    revBtn.addEventListener("click",function (){
        btnClick(-1);
    },false);
    fwdBtn.addEventListener("click",function (){
        var idx2 = (idx + 1) % 4;
        $("#slideShow > img:eq("+idx+")").fadeOut();
        $("#slideShow > img:eq("+idx2+")").fadeIn();
        idx = (idx + 1) % 4;

    },false);
}


function btnClick(offset) {
    idx = (idx + offset) % 4;
    var idx2 = (idx + offset) % 4;

    $("#slideShow > img:eq("+idx+")").fadeOut();
    $("#slideShow > img:eq("+idx2+")").fadeIn();


}
