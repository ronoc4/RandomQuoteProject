/**
 * Created by conor on 6/15/16.
 */


// API key: d0Ioyl1C7LmshvmIAE9J3iefEoXCp1MylXVjsng1qOuNg9JtS6
    //'https://andruxnet-random-famous-quotes.p.mashape.com/endpoint?mashape-key=d0Ioyl1C7LmshvmIAE9J3iefEoXCp1MylXVjsng1qOuNg9JtS6'

var apiKey = "d0Ioyl1C7LmshvmIAE9J3iefEoXCp1MylXVjsng1qOuNg9JtS6";
var baseURL = "https://andruxnet-random-famous-quotes.p.mashape.com/";

//Construct API key
var apiURL = baseURL + "endpoint?mashape-key=" + apiKey;



$(document).ready(function () {
    
    //Function to format the data from JSON
    var getQuote = function(data) {
        $('#mainQuote').text(data.quote);
        $('#author').text('From: ' + data.author);
        //Post to Twitter by creating URL
    var tweet = 'https://twitter.com/intent/tweet?text=' + data.quote + ' From ' + data.author;
        $('#tweet').attr('href', tweet);
    };

    $(document).ready(function () {
        $.getJSON(apiURL, getQuote, 'jsonp');
    });

    $(document).click(function () {
       $.getJSON(apiURL, getQuote, 'jsonp');
    });


    //Wasn't working as intended so I removed, but left in for reference

    /*var $quotes = $('.quotes');

    $('#getMessage').on('click', function () {
    $.ajax({
        type: 'GET',
        url: apiURL,
        success:
            function (data) {
            $quotes.html(data);
        }
    });
    });*/

});

/*function callBack(data) {
    var quote = data.quotes;
    $.each(quote, function (index, title) {
       $(document.body).append('<h1' + title.quote + '</h1');
    });
}*/


    //$('#getMessage').on('click', function () {

   // $('.quotes').html('Here is the quote');
   //});
