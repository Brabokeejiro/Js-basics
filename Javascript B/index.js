var usd,ngn
function click() {
    usd = document.getElementById("USD");
    ngn = document.getElementById("NGN");
}
function usdFunc(){
    ngn.value = parseFloat(usd.value) * 410.83;
}
function ngnFunc(){
    usd.value = parseFloat(ngn.value) * 0.0024;
}
click();