const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const builtDays = (date, firstDayIndex, prevLastDay, lastDay, daysWithEvent, nextDays) => {
  let days = "";
  for (let x = firstDayIndex; x > 0 ; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}<span class=<span class=${daysWithEvent.includes(`${date.getFullYear()}-0${date.getMonth()+1}-${x}`) && "event"}></span></span></div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate()  &&  date.getMonth()  ===  new Date().getMonth()) {
        days += `<div class="today">${i}<span class=${daysWithEvent.includes(`${date.getFullYear()}-0${date.getMonth()+1}-${i}`) && "event"}></span></div>`;
    } else {
      days += `<div>
      ${i} ${`<span class=${daysWithEvent.includes(`${date.getFullYear()}-0${date.getMonth()+1}-${i}`) && "event"}>
      </span>`} 
      </div>`;
    }
  }
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}<span class=${daysWithEvent.includes(`${date.getFullYear()}-0${date.getMonth()+1}-${j}`) && "event"}></span></div>`;
  }
  return days
};

export {months, builtDays}