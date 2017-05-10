var picNo = 1;
function revBtnClick(){
    picNo--;
    document.getElementById("no").innerHTML="No." + picNo;
    if(picNo === 1){
        document.getElementById("rev_btn").disabled=true;
    }else if(picNo === 3){
        document.getElementById("fwd_btn").disabled=false;
        document.getElementById("no").className="no1";
    }
    document.getElementById("pict").src="img/" + picNo + ".jpg";
}
function fwdBtnClick(){
    picNo++;
    document.getElementById("no").innerHTML="No." + picNo;
    if(picNo === 4){
        document.getElementById("no").className="no2";
        document.getElementById("fwd_btn").disabled=true;
    }else if(picNo === 2){
        document.getElementById("rev_btn").disabled=false;
    }
    document.getElementById("pict").src="img/" + picNo + ".jpg";
}
