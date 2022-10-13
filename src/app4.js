import $ from 'jQuery'
import './app4.css'
const $circle = $('#app4 .circle')
$circle.on('mouseenter', function () {
    $circle.addClass('active')
}).on('mouseleave', function () {
    $circle.removeClass('active')
})