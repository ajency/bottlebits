$(document).ready(function () {
  rangeSlider(); 
});
$(document).ready(function () {
  $( ".hide-modal" ).click(function() {
    console.log("closed");
    $('.modal').modal('hide');
  });
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
$('#widget').draggable();
function myFunction(event) {
  
navigator.clipboard.writeText( $('#Link').attr('data-link'));
$("#toast-tp").removeClass('d-none');
  setTimeout(()=>{
    $("#toast-tp").addClass('d-none');
  },1000)
}





var itemContainers = [].slice.call(document.querySelectorAll('.list-column-content'));
var columnGrids = [];
var boardGrid;

itemContainers.forEach(function (container) {

  var grid = new Muuri(container, {
    items: '.list-item',
    layoutDuration: 400,
    layoutEasing: 'ease',
    dragEnabled: true,
    dragSort: function () {
      return columnGrids;
    },
    dragSortInterval: 0,
    dragContainer: document.body,
    dragReleaseDuration: 400,
    dragReleaseEasing: 'ease'
  })
  .on('dragStart', function (item) {
    item.getElement().style.width = item.getWidth() + 'px';
    item.getElement().style.height = item.getHeight() + 'px';
  })
  .on('dragReleaseEnd', function (item) {
    item.getElement().style.width = '';
    item.getElement().style.height = '';
    columnGrids.forEach(function (grid) {
      grid.refreshItems();
    });
  })
  .on('layoutStart', function () {
    boardGrid.refreshItems().layout();
  });

  columnGrids.push(grid);
});

boardGrid = new Muuri('.list', {
  layoutDuration: 400,
  layoutEasing: 'ease',
  dragEnabled: true,
  dragSortInterval: 0,
  dragStartPredicate: {
    handle: '.list-column-header'
  },
  dragReleaseDuration: 400,
  dragReleaseEasing: 'ease'
});