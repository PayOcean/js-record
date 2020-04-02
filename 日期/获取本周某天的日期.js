// 获取本周某天的日期,比如 getDateOfThisWeek('周四')
function getDateOfThisWeek(targetDay) {
  var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    weekDay = date.getDay(),
    nthOfDay = weekDay == 0 ?
    7 :
    weekDay;

  var targetIndex = [
    '周一',
    '周二',
    '周三',
    '周四',
    '周五',
    '周六',
    '周日'
  ].indexOf(targetDay);
  var thisWeekArr = []; //获取本周7天的日期
  for (var i = 0; i < 7; i++) {
    thisWeekArr[i] = date2str(new Date(year, month - 1, day - nthOfDay + i + 1), 'MM/dd');
  };
  return thisWeekArr[targetIndex];
};

// 格式化日期函数 date2str(new Date(curTime),"yyyy-MM-dd")
function date2str(dateObj, format) {
  var z = {
    y: dateObj.getFullYear(),
    M: dateObj.getMonth() + 1,
    d: dateObj.getDate(),
    h: dateObj.getHours(),
    m: dateObj.getMinutes(),
    s: dateObj.getSeconds()
  };
  return format.replace(/(y+|M+|d+|h+|m+|s+)/g, function(v) {
    return ((
      v.length > 1 ?
      "0" :
      "") + eval('z.' + v.slice(-1))).slice(-(
      v.length > 2 ?
      v.length :
      2))
  });
};
