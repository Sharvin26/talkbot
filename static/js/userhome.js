var main = function() {

    $('form').submit(function(event) {
        var $input = $(event.target).find('input');
        var message = $input.val();

        if (message != "") {
            var html = $('<li>').text(message);
            html.appendTo('#message');
            $input.val("");
            $('#message')[0].scrollIntoView(false);
        }
        return false;
    });


    var currentdate = new Date();
    var datetime =
        currentdate.getDate() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getFullYear() + " at " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();

    $('.time').html(datetime);
}

$(document).ready(main);