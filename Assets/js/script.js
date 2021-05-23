const notif = document.getElementById('notify');

$(document).ready(function () {
    // listen for save button clicks

    notif.classList.add("d-none");

    $('.saveBtn').on('click', function () {
      // get nearby values
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
  
      // save in localStorage
      localStorage.setItem(time, value);
  
      // Show notification that item was saved to localStorage by adding class 'show'
      //$('.notification').addClass('show');
  
      notif.classList.remove("d-none");

      // Timeout to remove 'show' class after 5 seconds
      setTimeout(function () {
        notif.classList.add("d-none");
        //console.log("done");
      }, 5000);

    });
  
    function hourUpdater() {
      // get current number of hours
      var currentHour = moment().hours();
  
      // loop over time blocks
      $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);
  
        // check if we've moved past this time
        // Add and delete colors for the blocks based on the time
        if (blockHour < currentHour) {
          $(this).addClass('past');
          $(this).addClass('bg-danger');
        } else if (blockHour === currentHour) {
          $(this).removeClass('past');
          $(this).addClass('present');
          $(this).addClass('bg-secondary');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
          $(this).addClass('bg-success');
        }
      });
    }
  
    hourUpdater();
  
    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
  
    // load any saved data from localStorage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
    // display current day on page
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
  });