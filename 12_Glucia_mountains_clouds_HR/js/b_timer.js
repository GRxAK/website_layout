
// таймер обратного отсчета

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    // var t =  Date.parse(new Date()) + endtime;
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
   
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
   
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
   
//
// var deadline_1 = getSecondsToTomorrow(); // for endless timer
// var deadline_1 = new Date(Date.parse('2021-05-15T00:00:00.417-00:00')); // for endless timer 
var deadline_1 = new Date(Date.parse(new Date()) +  getSecondsToTomorrow() * 1000); // for endless timer 




// функция высчитывает сколько секунд оталось до следующего дня
function getSecondsToTomorrow() {
  var d = new Date();
  var s = d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  d.setHours(23, 59, 59, 59);
  var v = d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
    var e = v - s;
    return e;
}
initializeClock('countdown', deadline_1);