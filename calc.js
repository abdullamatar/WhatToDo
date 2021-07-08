/*

!script to display remaining days of expected lifespan...just to get you going 😁( ﾉ ﾟｰﾟ)ﾉ＼(ﾟｰﾟ＼)
@params age, var expected, var remainingDays;

*/
// a = Number.parseInt(a);
// e = Number.parseInt(e);
function imReallyJustRushingThis(){
    var a = document.getElementById("age").value;
    var e = document.getElementById("expected").value;
    var daysLeft = 0;
    a *= 365; e*=365;
    daysLeft = e-a;
    document.getElementById("output").innerHTML = `Fortunately you've got around ${daysLeft} days left, what are you gonna do next? 🚀`;    
}