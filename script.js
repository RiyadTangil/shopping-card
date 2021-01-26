const plusBtn = document.getElementById('plusBtn');
plusBtn.addEventListener("click",function(){
 const plusBtnValue =  document.getElementById('plusBtnInput').value;
const plusBtnParseValue = parseFloat(plusBtnValue);
document.getElementById('plusBtnInput').value = plusBtnParseValue+1;

})