//parent
var content = document.getElementById('content');

content.onkeydown = function (event) {
  // log aantal cellen in parent
  var numberOfCells = content.getElementsByTagName("td").length;


  if (event.keyCode == 37) {
    console.log('left');
    // removed de focus van huidige focus element
    document.getElementById(event.target.id).blur()

    // haalt id op van huidige focus en split deze in losse letters
    var currentfocus = event.target.id.split('');

    // zorgt ervoor dat element 1 terugtelt 
    currentfocus.splice(currentfocus.length - 1, 1, +currentfocus[currentfocus.length - 1] - 1);

    // maakt hier het id aan van toekomstig nieuwe focus element
    var newfocus = currentfocus.join('');

    // voegt de focus toe aan nieuwe element
    document.getElementById(newfocus).focus()
  }

  ////////////
  else if (event.keyCode == 39) {
    console.log('right');
    // removed de focus van huidige focus element
    document.getElementById(event.target.id).blur()

    // haalt id op van huidige focus en split deze in losse letters
    var currentfocus = event.target.id.split('');

    // zorgt ervoor dat element 1 bijtelt 
    currentfocus.splice(currentfocus.length - 1, 1, +currentfocus[currentfocus.length - 1] + 1);

    // maakt hier het id aan van toekomstig nieuwe focus element
    var newfocus = currentfocus.join('');

    // voegt de focus toe aan nieuwe element
    document.getElementById(newfocus).focus()
  }
  ////////////

  else if (event.keyCode == 38) {
    console.log('up');
    // removed de focus van huidige focus element
    document.getElementById(event.target.id).blur()

    // haalt id op van huidige focus en split deze in losse letters
    var currentfocus = event.target.id.split('');

    // zorgt ervoor dat de row geteld wordt -1 voor de toekomstige row
    currentfocus.splice(2, 1, +currentfocus[2] - 1);

    // maakt hier het id aan van toekomstig nieuwe focus element
    var newfocus = currentfocus.join('');

    // voegt de focus toe aan nieuwe element
    document.getElementById(newfocus).focus();
  }
  else if (event.keyCode == 40) {
    console.log('down');
    // removed de focus van huidige focus element
    document.getElementById(event.target.id).blur()

    // haalt id op van huidige focus en split deze in losse letters
    var currentfocus = event.target.id.split('');

    // zorgt ervoor dat de row geteld wordt +1 voor de toekomstige row
    currentfocus.splice(2, 1, +currentfocus[2] + 1);

    // maakt hier het id aan van toekomstig nieuwe focus element
    var newfocus = currentfocus.join('');

    // voegt de focus toe aan nieuwe element
    document.getElementById(newfocus).focus();
  }
};