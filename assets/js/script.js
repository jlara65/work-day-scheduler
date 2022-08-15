let eventsObject = {};

function displayDate() {
    let nowDate = moment().format('dddd MMMM Do YYYY');
    $('#currentDay').text(nowDate);
}

function checkHour() {
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

function refreshTime() {
    let nowTime = moment().format('HH:mm:ss');
    setInterval(() => {
        if (nowTime === '00:00:00') {
            localStorage.clear();
            loadEvents
            displayDate();
        }
    }, 1000);
};
function loadEvents() {
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

$(".saveBtn").click(function(event) {
    let timeId = $(this).val();
    let timeData = $(`#${timeId}`).val();
    
    eventsObject[timeId]=timeData;
    localStorage.setItem('eventsObject', JSON.stringify(eventsObject));

})


displayDate(); 
refreshTime();
checkHour();
loadEvents();

