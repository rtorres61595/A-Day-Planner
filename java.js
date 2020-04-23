
// Use moment to get today's date

    // format should be [DAY OF WEEK], [Full Month] [DAYOFMONTH ex 3rd]
// Use moment to get current time (hours) and compare to 9AM-5PM hardcoded
    // Compare the time you get to the 9AM-5PM
    // highlight those before the hour grey
    // highlight current hour red
    // highlight after hour green
    // add or remove classes with jQuery
    // possibly generate the blocks, everything before current hour, give a grey class
    // current hour gets red class
    // after current hour gets green
// Saving stuff
    // correlate what you save to the date it was saved
    // on initial load, get today's date, compare with what's in local storage, and save that in localstorage
    // when to wipe the events (when the date in localstorage is different from today's date)




var day = moment ().format('llll');
$('#currentDay').append(day).value;



