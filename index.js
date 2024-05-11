var bt = document.getElementById("btSubmit");

function tinh() {
    var tien = Number(document.getElementById("ipSumMoney").value);
    var nguoi = Number(document.getElementById("ipPeople").value);
    var tip = Number(document.getElementById("tip").value);
    var kq = document.getElementById("result");

    var tienMoiNguoi = (tien + (tien * tip) / 100) / nguoi;

    kq.innerHTML = tienMoiNguoi.toFixed(2) + "$";
}

bt.onclick = tinh;
