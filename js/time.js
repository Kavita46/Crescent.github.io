var t = 3;
setInterval("refer()", 1000);
function refer() {
  if (t == 0) {
    location.href = "/00-第一阶段小组项目/蜗牛家具pc端 最终/4-userCenter-myOrder.html";
  }
  document.getElementById("show").innerHTML =
    "支付成功," + t + "秒后跳转到订单页";
  t--;
}
