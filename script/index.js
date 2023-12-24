function usd_inr() {
    var input = document.getElementById('usd_inr').value;
    var rate = "82.30";
    var total = input * rate;
    document.getElementById('rupee').innerHTML = total + " Rs";
}
function inr_usd() {
    var input = document.getElementById('inr_usd').value;
    var rate = "82.30";
    var total = input/rate;
    document.getElementById('usdinr').innerHTML = total+" $";
}
function usd_cad() {
    var input = document.getElementById('usd-cad').value;
    var rate = "1.34";
    var total = input * rate;
    document.getElementById('cad').innerHTML = total+" $";
}
function cad_usd() {
    var input = document.getElementById('cad_usd').value;
    var rate = "1.34";
    var total = input / rate;
    document.getElementById('usdcad').innerHTML = "$ " + total;
}
function usd_franc() {
    var input = document.getElementById('usd-franc').value;
    var rate = "0.91";
    var total = input * rate;
    document.getElementById('franc').innerHTML = "₣ " + total;
}
function franc_usd() {
    var input = document.getElementById('franc_usd').value;
    var rate = "0.91";
    var total = input / rate;
    document.getElementById('usdf').innerHTML = "$ " + total;
}
function usd_euro() {
    var input = document.getElementById('usd-euro').value;
    var rate = "0.93";
    var total = input * rate;
    document.getElementById('euro').innerHTML = "£ " + total;
}
function euro_usd() {
    var input = document.getElementById('euro_usd').value;
    var rate = "0.93";
    var total = input / rate;
    document.getElementById('usdeu').innerHTML = "$ " + total;
}