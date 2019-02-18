
function compute(f) {
 if (confirm("Are you sure?")) f.result.value = eval(f.expr.value)
 else alert("Please come back again.")
}

function JSClock() {
 var time = new Date();
 var hour = time.getHours();
 var minute = time.getMinutes();
 var second = time.getSeconds();
 var temp = "" + ((hour > 12) ? hour - 12 : hour);
 temp += ((minute < 10) ? ":0" : ":") + minute;
 temp += ((second < 10) ? ":0" : ":") + second;
 temp += (hour >= 12) ? " P.M." : " A.M.";
 document.clockForm.digits.value = temp;
 id = setTimeout("JSClock()",1000);
}

function initialization() {
 JSClock();
}

function square(number) {
 return number * number;
}