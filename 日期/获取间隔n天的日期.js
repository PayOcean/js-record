// n: 间隔天数（不写时默认为0）； d: 起始日期（不写时默认当天）；
function getDateInterval(n, d) {
  var n = n || 0;
  var d = d || new Date();
  d.setDate(d.getDate() + n);
  var y = d.getFullYear();
  var m = d.getMonth() + 1;
  var d = d.getDate();
  m < 10 && (m = '0' + m);
  d < 10 && (d = '0' + d);
  return y + "-" + m + "-" + d;
}
console.log("今天向前180天：" + getDateInterval(-180));
console.log("今天：" + getDateInterval());
console.log("今天向后7天：" + getDateInterval(7));
console.log("指定日期向后7天：" + getDateInterval(7, new Date('2019-08-08')));
