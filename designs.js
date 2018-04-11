// Select size input
const inputColor = $('#colorPicker');
console.log(inputColor.val());
// Select size input
const inputHeight = $('#inputHeight');
const inputWidth  = $('#inputWidth');
console.log(inputHeight.val());
console.log(inputWidth.val());

//Make grid event listener
$('#submit').on('click',function(event){
  event.preventDefault();
  let height = $('#inputHeight').val();
  let width = $('#inputWidth').val();
  $('#pixelCanvas').empty();
  makeGrid(height,width);
});

//Change color event listner
$('#pixelCanvas').on('click','td',function(){
  let color = inputColor.val();
  console.log(color);
  $(this).css('background-color',color);
});

// When size is submitted by the user, call makeGrid()
function makeGrid(height,width) {
  console.log(height);
  console.log(width);

  for(i = 0; i < height; i++){
    $('#pixelCanvas').append($("<tr></tr>"));
    for(x = 0; x < width; x++){
      $('tr').last().append($("<td></td>"));
    }
  }
}
