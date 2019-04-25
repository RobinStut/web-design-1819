(function ($) {
  const up = [38];
  const down = [40];

  let spaceCount = 0;


  const grabHandle = $("a");
  const rows = $("li[aria-grabbed]");

  return grabHandle.on("keydown", function (event) {
    const $this = $(this);
    const $row = $this.parent();
    console.log($row);
    console.log($this);
    console.log($row);

    if (event.which === 32 && spaceCount === 0) {
      spaceCount = 1;
      console.log(spaceCount);
      rows.attr("aria-grabbed", false);
      // rows.addClass("true")
      return $row.attr('aria-grabbed', true).addClass('true');
    }




    if (up.includes(event.which)) {
      if ($row.attr('aria-grabbed') === "true") {
        const prev = $row.prev();
        console.log(prev);
        if (prev) {
          $row.insertBefore(prev);
        }
        return $this.focus();
      }
    }

    if (down.includes(event.which)) {
      if ($row.attr('aria-grabbed') === "true") {
        const next = $row.next();
        console.log(next);
        if (next) {
          $row.insertAfter(next);
        }
        return $this.focus();
      }
    }
    if (event.which === 13 || event.which === 27 || (event.which === 32 && spaceCount === 1)) {
      spaceCount = 0;
      rows.removeClass("true")
      return rows.attr("aria-grabbed", false);
    }
  });

})(jQuery);





//parent
var content = document.getElementById('content');
// console.log(content);
var items = content.children
// console.log(items);
var dragcount = 0;

content.onkeydown = function (event) {
  // console.log(' ');
  // log aantal cellen in parent
  let values = check(document.activeElement)
  // console.log(values);



  var parentId = values[2];
  var hasParent = values[1];
  var id = values[0];
  var classCheck = document.activeElement.className;
  console.log(classCheck);
  var rx = /(\w*\d*)(\d)_(\d*)-*(\d*)/g
  console.log(id);
  var active = document.activeElement;


  if (event.keyCode == 37 || event.keyCode == 65) {
    setTimeout(function () {
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
    }, 300)

  }

  ////////////
  else if (event.keyCode == 39 || event.keyCode == 68) {
    setTimeout(function () {
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
    }, 300)

  }
  ////////////
  else if (event.keyCode == 38 || event.keyCode == 87) {
    setTimeout(function () {
      console.log('up');

      if (dragcount === 0 && classCheck === 'drag') {
        document.activeElement.blur()
        document.getElementById('c02_1-1').focus()
      }

      if (classCheck === 'drag' && dragcount !== 0) {
        console.log('steen papier schaar, draggen maar!');
        dragcount -= 1;
        document.activeElement.blur()
        // console.log(dragcount);
        let a = $("ul > li > a")[dragcount];
        a.focus()

        console.log(dragcount);
      }

      if (hasParent === false && classCheck !== "drag") {
        console.log('is false');
        document.getElementById(id).blur()
        var split = id.replace(rx, (...arg) => {
          var idPlus = Number(arg[2]) - 1;
          return `${arg[1] + idPlus + '_' + arg[3]}`
        });
        console.log(split);
        document.getElementById(split).focus();
      }

      if (hasParent === true && classCheck !== 'drag') {
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
    }, 300)
  } else if (event.keyCode == 40 || event.keyCode == 83) {
    setTimeout(function () {
      console.log('down');
      var split;
      if (hasParent === false) {
        document.getElementById(id).blur()
        console.log(split);
        split = id.replace(rx, (...arg) => {
          var idPlus = Number(arg[2]) + 1;
          return `${arg[1] + idPlus + '_' + arg[3]}`
        });
        console.log(split);
        document.getElementById(split).focus();
      }



      if (hasParent === true && classCheck !== 'drag') {
        console.log('is false');
        document.getElementById(id).blur()
        split = id.replace(rx, (...arg) => {
          var idPlus = Number(arg[3]) + 1;
          return `${arg[1] + arg[2] + '_' + idPlus + '-' + arg[4]}`
        });
        console.log(split);
      }
      try {
        // console.log(split);
        console.log(document.getElementById(split));

        // document.getElementById('test').focus();
        document.getElementById(split).focus();
        // console.log('done');
      } catch (e) {
        if (e instanceof TypeError) {
          console.log('error');
          split = parentId;
          document.getElementById(split).focus();
        }
      }
      console.log(id);
      if (id === "c02_1-1") {
        console.log('hey');
        console.log(split);
        const $this = $(this);
        const $row = $this.children()[1];
        let a = $("ul > li > a")[dragcount];
        a.focus()
        dragcount++
        console.log(dragcount);
      }

      if (classCheck === 'drag') {
        console.log('steen papier schaar, draggen maar!');
        document.activeElement.blur()
        // console.log(dragcount);
        let a = $("ul > li > a")[dragcount];
        a.focus()
        dragcount += 1;
        console.log(dragcount);
      }

    }, 300)
  }
}

function check(x) {
  // console.log(check(document.activeElement));
  var parent = x.parentElement
  // console.log(parent);
  var parentId = x.parentElement.id
  if (parentId === "") {
    // console.log(parentId);
    parentId = x.parentElement.parentElement.id
    // console.log(parentId);
  }
  if (parentId === "") {
    // console.log(parentId);
    parentId = x.parentElement.parentElement.parentElement.id
  }
  var hasParent = (parentId === 'content') ? false : true;
  var id = x.id
  return [id, hasParent, parentId]
}