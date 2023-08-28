import $ from 'jquery';
import debounce from 'lodash/debounce';

$(document).ready(function() {
    const countParagraph = $('#count');

    // Initial count value
    let count = 0;

    // Function to update the counter and paragraph content
    function updateCounter() {
        count++;
        countParagraph.text(`${count} clicks on the button`);
    }

    const debouncedUpdateCounter = debounce(updateCounter, 300);

    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="startButton">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    $('#startButton').on('click', debouncedUpdateCounter);
});
