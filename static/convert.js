//parent
var content = document.getElementById('content');
// console.log(content);
var items = content.children
// console.log(items);


content.onkeydown = function (event) {
  // console.log(' ');
  // log aantal cellen in parent
  let values = check(document.activeElement)
  // console.log(values);

  var parentId = values[2];
  var hasParent = values[1];
  var id = values[0];
  var rx = /(\w*\d*)(\d)_(\d*)-*(\d*)/g


  if (event.keyCode == 37 || event.keyCode == 65) {
    console.log('left');
    if (hasParent === false) {
      console.log('is false');
      document.getElementById(id).blur()
      var split = id.replace(rx, (...arg) => {
        console.log(arg);
        var idPlus = Number(arg[3]) - 1;
        return `${arg[1] + arg[2] + '_' + idPlus}`
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
          document.getElementById(split).focus();
        }
      }
      // document.getElementById(split).focus();
    }
  }

  ////////////
  else if (event.keyCode == 39 || event.keyCode == 68) {
    console.log('right');
    if (hasParent === false) {
      console.log('is false');
      document.getElementById(id).blur()
      var split = id.replace(rx, (...arg) => {
        var idPlus = Number(arg[3]) + 1;
        return `${arg[1] + arg[2] + '_' + idPlus}`
      });
      console.log(split);
      document.getElementById(split).focus();
    }
    if (hasParent === true) {
      console.log('is false');
      document.getElementById(id).blur()
      var split = id.replace(rx, (...arg) => {
        var idPlus = Number(arg[4]) + 1;
        return `${arg[1] + arg[2] + '_' + arg[3] + '-' + idPlus}`
      });
      try {
        document.getElementById(split).focus();
      } catch (e) {
        if (e instanceof TypeError) {
          console.log('error');
          split = parentId;
          console.log(split);
          document.getElementById(split).focus();
        }
      }
      // document.getElementById(split).focus();
    }

  }
  ////////////

  else if (event.keyCode == 38 || event.keyCode == 87) {
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
        // console.log(arg);
        var idPlus = Number(arg[3]) - 1;
        return `${arg[1] + arg[2] + '_' + idPlus + '-' + arg[4]}`
      });
      console.log(split);
      try {
        document.getElementById(split).focus();
      } catch (e) {
        if (e instanceof TypeError) {
          console.log('error');
          split = parentId;
          // console.log(split);
          document.getElementById(split).focus();
        }
      }
      // document.getElementById(split).focus();
    }
  }

  else if (event.keyCode == 40 || event.keyCode == 83) {
    console.log('down');
    if (hasParent === false) {
      document.getElementById(id).blur()
      var split = id.replace(rx, (...arg) => {
        var idPlus = Number(arg[2]) + 1;
        return `${arg[1] + idPlus + '_' + arg[3]}`
      });
      console.log(split);
      document.getElementById(split).focus();
    }

    if (hasParent === true) {
      console.log('is false');
      document.getElementById(id).blur()
      var split = id.replace(rx, (...arg) => {
        var idPlus = Number(arg[3]) + 1;
        return `${arg[1] + arg[2] + '_' + idPlus + '-' + arg[4]}`
      });
      console.log(split);
    }
    try {
      document.getElementById(split).focus();
    } catch (e) {
      if (e instanceof TypeError) {
        console.log('error');
        split = parentId;
        document.getElementById(split).focus();
      }
    }
    // document.getElementById(split).focus();
  }

}

function check(x) {
  var parent = x.parentElement
  var parentId = x.parentElement.id
  if (parentId === "") {
    parentId = x.parentElement.parentElement.id
  }
  if (parentId === "") {
    parentId = x.parentElement.parentElement.parentElement.id
  }
  var hasParent = (parentId === 'content') ? false : true;
  var id = x.id
  return [id, hasParent, parentId]
}