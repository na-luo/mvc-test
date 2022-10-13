import $ from 'jQuery'
import './app3.css'
const $square = $('#app3 .square')
$square.on('click', function () {
    $square.toggleClass('active')
});