let eventsObject = {}; // set the variable 

function displayDate() { // set date format to display the current date 
    let nowDate = moment().format('dddd MMMM Do YYYY');
    $('#currentDay').text(nowDate);
}

function checkHour() { // function to check current hour and set class name in textarea to link css background color
    var hourArray = ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17'];
    let nowHour = moment().format('HH');
    for (var id of hourArray) {
        if (id < nowHour) {
            $(`#${id}`).addClass('past')
        } else if (id === nowHour) {
            $(`#${id}`).addClass('present')
        } else if (id > nowHour) {
            $(`#${id}`).addClass('future')
        }
    }
}

function refreshTime() { // function to update every second 
    let nowTime = moment().format('HH:mm:ss');
    setInterval(() => {
        if (nowTime === '00:00:00') {
            localStorage.clear();
            loadEvents
            displayDate();
        }
    }, 1000);
};

function loadEvents() { // function of object properties in the localStorage load in textArea 
    eventsObject = JSON.parse(localStorage.getItem('eventsObject')) || {};
    console.log(eventsObject);
    for (var key in eventsObject) {
        if(key) {
            $(`#${key}`).val(eventsObject[key])
        } else {
            $(`#${key}`).val('')
        }
    }
}

$(".saveBtn").click(function(event) { // function to storage any data entered in textarea after click save button
    let timeId = $(this).val();
    let timeData = $(`#${timeId}`).val();
    
    eventsObject[timeId]=timeData;
    localStorage.setItem('eventsObject', JSON.stringify(eventsObject));

})

// call all functions
displayDate(); 
refreshTime();
checkHour();
loadEvents();

