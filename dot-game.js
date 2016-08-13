$(document).ready( function() {

  // create pairs of horizontal-lines and dots
  for (var i=0; i<9; i++) {
    var newTableRow = $("tbody").append("<tr></tr>");
    if (i % 2 === 0) {
      // create a row of dots and horizontal lines
      for (var j=0; j<9; j++) {
          if (j % 2 === 0) {
            //create a dot
            newTableRow.append('<td class="dot"></td>');
          } else {
            // create a horizontal line
            newTableRow.append('<td class="horizontal-line unclicked-line" id="' + i + j + '"></td>');
          }
      }
    } else {
      // create a row of vertical lines and squares
      for (var j=0; j<9; j++) {
          if (j % 2 === 0) {
            //create a vertical line
            newTableRow.append('<td class="vertical-line unclicked-line" id="' + i + j + '"></td>');
          } else {
            // create a square
            newTableRow.append('<td class="square" id="' + i + j + '"></td>');
          }
      }
    }

  }

  $(".unclicked-line").on("click", function(){
    $(this).addClass("clicked-line");
    $(this).removeClass("unclicked-line");
  })
});
