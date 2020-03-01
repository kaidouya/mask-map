function getCurrentDate() {
  const date = new Date();
  const timeObj = {
    year: `${date.getFullYear()}`,
    month:
      date.getMonth() + 1 > 10
        ? `${date.getMonth() + 1}`
        : `0${date.getMonth() + 1}`,
    day: date.getDate() > 10 ? `${date.getDate()}` : `0${date.getDate()}`
  };
  return `${timeObj['year']}-${timeObj['month']}-${timeObj['day']}`;
}

function getCurrentChineseWeek() {
  const weekList = [
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
    '星期日'
  ];
  const date = new Date();
  let today = date.getDay(); // is 0~6 Sunday ~ staturday
  return today !== 0
    ? `${weekList[today - 1]}`
    : `${weekList[weekList.length - 1]}`;
}

export { getCurrentDate, getCurrentChineseWeek };
