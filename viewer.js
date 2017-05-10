var picNo = 1;
var myImg = [];

for(var i = 0; i < 4; i++){
    myImg[i] = document.createElement("img");
    myImg[i].src = "img/" + ( i + 1 ) + ".jpg";
}
function showImg(){
    document.getElementById("no").innerHTML="No." + picNo;
    document.getElementById("pict").src=myImg[picNo - 1].src;
}
function revBtnClick(){
    picNo--;
    showImg();
    if(picNo === 1){
        document.getElementById("rev_btn").disabled=true;
    }else if(picNo === 3){
        document.getElementById("fwd_btn").disabled=false;
        document.getElementById("no").className="no1";
    }
}
function fwdBtnClick(){
    picNo++;
    showImg();
    if(picNo === 4){
        document.getElementById("no").className="no2";
        document.getElementById("fwd_btn").disabled=true;
    }else if(picNo === 2){
        document.getElementById("rev_btn").disabled=false;
    }
}
