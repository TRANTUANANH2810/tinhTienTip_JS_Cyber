document.getElementById("btSubmit").onclick = function () {
    var tien = +document.getElementById("ipSumMoney").value;
    var nguoi = +document.getElementById("ipPeople").value;
    var tip = +document.getElementById("tip").value;

    var kq = document.getElementById("result");

    if (tien == "" || nguoi == "" || tip == "") {
        alert(" Vui long nhap day du thong tin :::");
    } else {
        var tienMoiNguoi = (tien + (tien * tip) / 100) / nguoi;
        kq.innerHTML = "🤴" + tienMoiNguoi.toFixed(2) + "$" + "🤴";
    }
};
