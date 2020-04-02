// 举例
var num = 1.1 + 1.3;
console.log(num, typeof num) // 2.4000000000000004 number

/* 精度矫正 */
var a = num.toPrecision(12);
console.log(a, typeof a) // 2.40000000000 string

/* 四舍五入，最大精度在小数点之后两位*/
var b = Math.round(num * 100) / 100;
console.log(b, typeof b) // 2.4 number

/* 始终保留两位小数，结果比如 20.34、20.10、18.00 */
var c = (Math.round(num * 100) / 100).toFixed(2);
console.log(c, typeof c) // 2.40 string


/* 保留n位小数并格式化输出（不足的部分补0） */
var fomatFloat = function (value, n) {
    var f = Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
        s += '.';
    }
    for (var i = s.length - s.indexOf('.'); i <= n; i++) {
        s += "0";
    }
    return s;
}
var d = fomatFloat(num, 3);
console.log(d, typeof d) // 2.400 string

