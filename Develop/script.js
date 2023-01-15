$(function () {


// Current date in header
var currentDay = dayjs();

$('#currentDay').text(currentDay.format('dddd, MMMM DD'));
$('#currentTime').text(currentDay.format('hh:mm a'));
// 

// Past, present and future formatting
let timeBlock = [9,10,11,12,13,14,15,16,17]
let now = currentDay.format('HH');

for (let i = 0; i < timeBlock.length; i++) {
  if(timeBlock[i] < now) {
    $('#hour-' + timeBlock[i]).addClass('past');
  } else if (timeBlock[i] === now) {
    $('#hour-' + timeBlock[i]).addClass('present');
  } else {
    $('#hour-' + timeBlock[i]).addClass('future');
  }
}
// 

// Save to localstorage
$('.saveBtn').on('click', function(event) {
  event.preventDefault();

  var tasks = $(this).siblings('.description').get(0).value;
  localStorage.setItem($(this).attr('id'), tasks);
})
// 

// Load previously saved values on page refresh
for (let i=0; i < timeBlock.length; i++) {
  let savedSchedule = localStorage.getItem('hour-' + timeBlock[i]);
  $('#hour-' + timeBlock[i]).children('textarea').text(savedSchedule);
}


});
