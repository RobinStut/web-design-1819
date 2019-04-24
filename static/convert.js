
(function ($) {
  const up = [192, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 189, 187, 8, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 38];
  const down = [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 220, 16, 192, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 17, 18, 91, 93, 18, 40];

  let spaceCount = 0;


  const grabHandle = $("a");
  const rows = $("li[aria-grabbed]");

  return grabHandle.on("keydown", function (event) {
    const $this = $(this);
    const $row = $this.parent();
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
        if (prev) {
          $row.insertBefore(prev);
        }
        return $this.focus();
      }
    }

    if (down.includes(event.which)) {
      if ($row.attr('aria-grabbed') === "true") {
        const next = $row.next();
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
