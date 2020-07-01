function complexMathematics(){
	var val=Math.abs(hash(document.getElementById("name").value.replace(/_/g,"a").toLowerCase()));
  var endVal=Math.abs(parseInt((val/(10**(val.toString().length-1)))*10));
  endVal=((endVal<50)?(endVal+30):endVal);
  document.getElementById("sexiness").innerHTML="Your bread sexiness percentage is:<br>"+endVal.toString()+"%!";
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
// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {

  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      // Swap it in and reload the page to get the new hotness.
      window.applicationCache.swapCache();
      if (confirm('A new version of this site is available. Load it?')) {
        window.location.reload();
      }
    } else {
      // Manifest didn't changed. Nothing new to server.
    }
  }, false);

}, false);
