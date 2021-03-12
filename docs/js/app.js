$(document).ready(function () {
  rangeSlider(); 
});

$(window).resize(function () {
  $("#slider-range-max").slider("destroy");
  rangeSlider();
});

function rangeSlider() {
  const isMobile = () => window.innerWidth < 768;
  $("#slider-range-max").slider({
    range: isMobile() ? "min" : "max",
    min: 1,
    max: 4,
    value: 3,
    orientation: isMobile() ? "vertical" : "horizontal",
    slide: function (event, ui) {
      $("#whisky_knowledge").val(ui.value);
    }
  });
  $("#whisky_knowledge").val($("#slider-range-max").slider("value"));
}

function onSubmit(token) {
  document.getElementById("demo-form").submit();
}

var sheet = document.createElement('style'),
  $rangeInput = $('.range input'),
  prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);

var getTrackStyle = function (el) {
  var curVal = el.value,
    val = (curVal - 1) * 16.666666667,
    style = '';

  // Set active label
  $('.range-labels li').removeClass('active selected');

  var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');

  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');

  // Change background gradient
  for (var i = 0; i < prefs.length; i++) {
    style += '.range {background: linear-gradient(to right, red, red' + val + '%, #fff ' + val + '%, #fff 100%)}';
    style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
  }

  return style;
}

$rangeInput.on('input', function () {
  sheet.textContent = getTrackStyle(this);
});

// Change input value on label click
$('.range-labels li').on('click', function () {
  var index = $(this).index();

  $rangeInput.val(index + 1).trigger('input');

});

$(function () {
  $("#sortable").sortable();
  $("#sortable").disableSelection();
});

function myFunction(event) {
  // console.log("working");
  // var copyText = document.getElementById("Link");
  // copyText.select();
  // copyText.setSelectionRange(0, 99999);
  // document.execCommand("copy");
  
  // $("#toast-tp").removeClass('d-none');

  // setTimeout(()=>{
  //   $("#toast-tp").addClass('d-none');
  // },1000)
  console.log('test');
var textarea = document.createElement("textarea");
console.log($('#Link').attr('data-link'));
textarea.textContent = $('#Link').attr('data-link');
textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
document.body.appendChild(textarea);
textarea.select();
try {
document.execCommand("copy"); // Security exception may be thrown by some browsers.
  $("#toast-tp").removeClass('d-none');
  setTimeout(()=>{
    $("#toast-tp").addClass('d-none');
  },1000)
} catch (ex) {
console.warn("Copy to clipboard failed.", ex);
} finally {
document.body.removeChild(textarea);
}
}

