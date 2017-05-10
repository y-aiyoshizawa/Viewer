window.onload = init;
function init(){
    var picNo = 1;
    var myImg = [];
    var myNo = document.getElementById("no");
    var myPict = document.getElementById("pict");
    var revBtn = document.getElementById("rev_btn");
    var fwdBtn = document.getElementById("fwd_btn");

    for(var i = 0; i < 4; i++){
        myImg[i] = document.createElement("img");
        myImg[i].src = "img/" + ( i + 1 ) + ".jpg";
    }
    function showImg(){
        myNo.innerHTML="No." + picNo;
        myPict.src=myImg[picNo - 1].src;
    }
    revBtn.onclick = revBtnClick;
    fwdBtn.onclick = fwdBtnClick;
    function revBtnClick(){
        picNo--;
        showImg();
        if(picNo === 1){
            revBtn.disabled=true;
        }else if(picNo === myImg.length - 1){
            fwdBtn.disabled=false;
            myNo.className="no1";
        }
    }
    function fwdBtnClick(){
        picNo++;
        showImg();
        if(picNo === myImg.length){
            fwdBtn.disabled=true;
            myNo.className="no2";
        }else if(picNo === 2){
            revBtn.disabled=false;
        }
    }
}
