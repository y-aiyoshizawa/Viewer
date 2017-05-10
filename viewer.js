var picNo = 1;
function revBtnClick(){
    picno--;
    document.getElementById("no").innerHTML="No." + picNo;
    document.getElementById("no").className="no1";
    document.getElementById("pict").src="img/" + picNo + ".jpg";
}
function fwdBtnClick(){
    picNo++;
    document.getElementById("no").innerHTML="No." + picNo;
    document.getElementById("no").className="no2";
    document.getElementById("pict").src="img/" + picNo + ".jpg";
}
