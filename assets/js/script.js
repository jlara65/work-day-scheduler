let nowDate = moment().format('dddd MMMM Do YYYY');

function displayDate() {
    $('#currentDay').text(nowDate);
}
displayDate(); 