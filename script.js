

function calc(max_price, point) {
    let max_point = 10;
    let price = max_price / max_point * point;
    return price;
}

document.querySelector(".max_price_button").onclick = function () {
    let max_price = document.querySelector(".max_price").value;
    max_price = parseInt(max_price);
    let point = document.querySelector(".point").value;
    point = parseInt(point);
 
    let result = calc(max_price, point);

    document.querySelector(".result").innerHTML = result;
    document.querySelector(".max_price").value = "";
    document.querySelector(".point").value = "";

}
