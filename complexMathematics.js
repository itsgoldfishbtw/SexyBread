function complexMathematics(){
	var val=Math.abs(hash(document.getElementById("name").value.replace(/_/g,"a").toLowerCase()));
  var endVal=Math.abs(parseInt((val/(10**(val.toString().length-1)))*10));
  endVal=((endVal<50)?(endVal+30):endVal);
  document.getElementById("sexiness").innerHTML="Your bread sexiness percentage is:"+endVal.toString()+"%!";
  document.getElementById("sexiness").removeAttribute("hidden");
}

function hash(string){
  var hash = 0, i, chr;
  for (i = 0; i < string.length; i++) {
    chr   = string.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash;
}
