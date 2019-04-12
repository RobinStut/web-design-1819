console.log("working on it");

// var dragged;
//
// /* events fired on the draggable target */
// document.addEventListener("drag", function(event) {}, false);
//
// document.addEventListener(
//   "dragstart",
//   function(event) {
//     // store a ref. on the dragged elem
//     dragged = event.target;
//     // make it half transparent
//     event.target.style.opacity = 0.5;
//   },
//   false
// );
//
// document.addEventListener(
//   "dragend",
//   function(event) {
//     // reset the transparency
//     event.target.style.opacity = "";
//   },
//   false
// );
//
// /* events fired on the drop targets */
// document.addEventListener(
//   "dragover",
//   function(event) {
//     // prevent default to allow drop
//     event.preventDefault();
//   },
//   false
// );
//
// document.addEventListener(
//   "dragenter",
//   function(event) {
//     // highlight potential drop target when the draggable element enters it
//     if (event.target.className == "dropzone") {
//       event.target.style.background = "purple";
//     }
//   },
//   false
// );
//
// document.addEventListener(
//   "dragleave",
//   function(event) {
//     // reset background of potential drop target when the draggable element leaves it
//     if (event.target.className == "dropzone") {
//       event.target.style.background = "";
//     }
//   },
//   false
// );
//
// document.addEventListener(
//   "drop",
//   function(event) {
//     // prevent default action (open as link for some elements)
//     event.preventDefault();
//     // move dragged elem to the selected drop target
//     if (event.target.className == "dropzone") {
//       event.target.style.background = "";
//       dragged.parentNode.removeChild(dragged);
//       event.target.appendChild(dragged);
//     }
//   },
//   false
// );

window.addEventListener(
  "keydown",
  function(event) {
    const tr = [
      "Digit7",
      "KeyY",
      "KeyU",
      "KeyI",
      "KeyO",
      "KeyP",
      "BracketLeft",
      "BracketRight",
      "Enter",
      "Backspace",
      "Equal",
      "Minus",
      "Digit0",
      "Digit9",
      "Digit8"
    ];
    const dr = [
      "KeyH",
      "KeyJ",
      "KeyK",
      "KeyL",
      "Semicolon",
      "Quote",
      "Backslash",
      "KeyN",
      "KeyM",
      "Comma",
      "Period",
      "Slash",
      "ShiftRight",
      "MetaRight",
      "AltRight",
      "ArrowLeft",
      "ArrowUp",
      "ArrowDown",
      "ArrowRight"
    ];
    const tl = [
      "Digit6",
      "Digit5",
      "Digit4",
      "Digit3",
      "Digit2",
      "Digit1",
      "Backquote",
      "Tab",
      "KeyQ",
      "KeyW",
      "KeyE",
      "KeyR",
      "KeyT",
      "Escape"
    ];
    const dl = [
      "CapsLock",
      "KeyA",
      "KeyS",
      "KeyD",
      "KeyF",
      "KeyG",
      "KeyV",
      "KeyC",
      "KeyX",
      "KeyZ",
      "IntlBackslash",
      "ShiftLeft",
      "ControlLeft",
      "AltLeft",
      "MetaLeft"
    ];

    let status;

    let str =
      "KeyboardEvent: key='" + event.key + "' | code='" + event.code + "'";
    // console.log(str);
    if (event.code === "Space") {
      console.log("space");
    }
    if (tr.includes(event.code)) {
      console.log("TopRight " + event.code);
    }
    if (dr.includes(event.code)) {
      console.log("DownRight " + event.code);
    }
    if (tl.includes(event.code)) {
      console.log("TopLeft " + event.code);
    }
    if (dl.includes(event.code)) {
      console.log("DownLeft " + event.code);
    }
  },
  true
);

//
// (($) ->
//
//     SPACE = 32
//     UP = 38
//     DOWN = 40
//     ENTER = 13
//     ESC = 27
//
//     grabHandle = $ "a"
//     rows = $ "li[aria-grabbed]"
//
//     grabHandle.on "keyup", (event) ->
//         $this = $ this
//         $row = $this.parent()
//         switch event.which
//             when SPACE
//                 # console.log('space', 'grabbed', $row.attr "aria-grabbed");
//                 rows.attr("aria-grabbed", false)
//                 $row.attr('aria-grabbed', true)
//             when UP
//                 # console.log('up', 'grabbed', $row.attr "aria-grabbed");
//                 if $row.attr('aria-grabbed') == "true"
//                     prev = $row.prev()
//                     if prev
//                         $row.insertBefore(prev)
//                     $this.focus()
//             when DOWN
//                 # console.log('down', 'grabbed', $row.attr "aria-grabbed");
//                 if $row.attr('aria-grabbed') == "true"
//                     next = $row.next()
//                     if next
//                         $row.insertAfter(next)
//                     $this.focus()
//             when ENTER, ESC
//                 # console.log('away', 'grabbed', $row.attr "aria-grabbed");
//                 rows.attr("aria-grabbed", false)
//
// ) jQuery
//

// https://codepen.io/EmilyDirsh/pen/ybEQZj
