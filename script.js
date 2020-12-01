function getPara1() {
 var inputs=[];

 for(var i=1; i<=6; i++){
     inputs.push(document.getElementById("para2_input1" + i).value);

 }
 inputs.join(". ");
 document.getElementById("showPara1").innerHTML = inputs.join(". ")
}

function GetPara2() {
    var inputs2=[];
   
    for(var y=1; y<=6; y++){
        inputs2.push(document.getElementById("para2_input2" + y).value);
   
    }
    inputs2.join(". ");
    document.getElementById("showPara2").innerHTML = inputs2.join(". ")
   }