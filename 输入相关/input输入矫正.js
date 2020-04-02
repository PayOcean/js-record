/*  非负整数输入矫正：(输入值, 最小值限定, 最大值限定) */
function rectifyInteger(value, min, max) {
  var newVal = value + '';
  var min = min || 0;
  var max = max || Infinity;
  newVal = newVal.replace(/[\D]/g, '') // 去掉非数字符
    .replace(/^(0+)(\d)$/, '$2'); // 去掉开始位置的0
  return newVal > max ? max : newVal < min ? min : newVal;
}

/*  非负浮点数输入矫正：(输入值, 最小值限定, 最大值限定, 小数位数限定) */
function rectifyFloat(value, min, max, n) {
  var newVal = value + '';
  var n = n || 2
  var min = min || 0;
  var max = max || Infinity;
  var nReg = new RegExp('^(\\d+)\\.(' + '\\d'.repeat(n) + ').*$');
  var maxReg = new RegExp('(' + max + ')\\.*$');
  newVal = newVal.replace(/[^\d.]/g, '') // 去除非数字和小数点的字符
    .replace(/^\./, '0.') // 如果开始只输入了.则自动转为0.
    .replace(/^0*(\d)/, '$1') // 如果第一个数字为0，则去除
    .replace(/\./, '&').replace(/\./g, '').replace('&', '.') // 只保留第一个.其余替换为空
    .replace(nReg, '$1.$2') // 小数点后只允许输入n位数字
    .replace(maxReg, '$1') // 最大值后面不再出现小数点
  return newVal > max ? max : newVal < min ? min : newVal;
};
