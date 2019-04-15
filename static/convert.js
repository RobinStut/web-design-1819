//parent
var content = document.getElementById('content');
// console.log(content);
var items = content.children
// console.log(items);


content.onkeydown = function (event) {
  // log aantal cellen in parent
  let values = check(document.activeElement)
  console.log(values);

  var parentId = values[2];
  var hasParent = values[1];
  var id = values[0];
  var rx = /(\w*\d*)(\d)_(\d)-*(\d*)/g


  if (event.keyCode == 37) {
    console.log('left');
    // removed de focus van huidige focus element
    document.getElementById(event.target.id).blur()
    console.log(document.getElementById(event.target.id).children);

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

    if (hasParent === false) {
      console.log('is false');
      document.getElementById(id).blur()
      var split = id.replace(rx, (...arg) => {
        var idPlus = Number(arg[2]) - 1;
        return `${arg[1] + idPlus + '_' + arg[3]}`
      });
      console.log(split);
      document.getElementById(split).focus();
    }

    if (hasParent === true) {
      console.log('is false');
      document.getElementById(id).blur()
      var split = id.replace(rx, (...arg) => {
        console.log(arg);
        var idPlus = Number(arg[4]) - 1;
        return `${arg[1] + arg[2] + '_' + arg[3] + '-' + idPlus}`
      });
      console.log(split);
      try {
        document.getElementById(split).focus();
      } catch (e) {
        if (e instanceof TypeError) {
          console.log('error');
          split = parentId;
        }
      }
      document.getElementById(split).focus();
    }
  }

  else if (event.keyCode == 40) {
    console.log('down');
    if (hasParent === false) {
      document.getElementById(id).blur()
      var split = id.replace(rx, (...arg) => {
        var idPlus = Number(arg[2]) + 1;
        return `${arg[1] + idPlus + '_' + arg[3]}`
      });
      document.getElementById(split).focus();
    }

    if (hasParent === true) {
      console.log('is false');
      document.getElementById(id).blur()
      var split = id.replace(rx, (...arg) => {
        var idPlus = Number(arg[4]) + 1;
        return `${arg[1] + arg[2] + '_' + arg[3] + '-' + idPlus}`
      });
    }

    try {
      document.getElementById(split).focus();
    } catch (e) {
      if (e instanceof TypeError) {
        console.log('error');
        split = parentId;
      }
    }
    document.getElementById(split).focus();
  }
  function check(x) {
    var parentId = x.parentElement.id
    var hasParent = (parentId === 'content') ? false : true;
    var id = x.id
    return [id, hasParent, parentId]
  }
}



