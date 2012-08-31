// Designed to run on http://www.reddit.com/ (i.e., Reddit Home Page)
$(document).ready(function() {

  // If my math is right, then there's about a 50% chance of this code running
  // after 7 front-page views:
  //
  // ((1 - 0.1) ^ 7 = 0.4782969, or a 52% chance of the event happening
  // after 7 trials).
  //
  // Personally, I check the reddit front page probably 3-5 times a day, so
  // I'll see the payload probably every other day.
  if (Math.random() < 0.1) {
    // Insert into one of the first 25 items on the front page.
    var indexToInsert = Math.floor(Math.random() * 25);

    // This selector is so specific because the "Recently Viewed Links"
    // section on the right of the page also uses the .entry class, and
    // we don't want to insert the payload in there.
    $('#siteTable > .thing > .entry').each(function(index, e) {
      if (index == indexToInsert) {
	$('<div style="color:red">Are you dreaming?</div>').appendTo(e);
      }
    });
  }
});
