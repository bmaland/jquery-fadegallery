/* jQuery Fade Gallery, version 0.3
 * Copyright 2008 Bjørn Arild Mæland (bjorn.maeland at gmail.com)
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 */

fadeGallery = {
  options: {
		"animationSpeed": 1200,
		"autoChangeSpeed": 3500
	},
	
  init: function() {
    var images = $("#fadeGallery ul li img");
    fadeGallery.active = (images.length > 0) ? true : false;
    fadeGallery.automated = false;
    fadeGallery.array = [];
    
    if (!fadeGallery.active) return;
    
    // Add images to our array and set css properties
    images.each(function () {
      $(this).css({display: "none", position: "absolute", top: 0, zIndex: 0});
      fadeGallery.array.push($(this));
    });
    
    // Show first img
    fadeGallery.array[0].show();
    fadeGallery.arrayPosition = 0;
    fadeGallery.updateTitle();
    
    // Click handlers
    if (! $("#fadeGallery a").length > 0) { // No controls defined, turn on automated image transition
      fadeGallery.automated = true;
      window.setTimeout("fadeGallery.changeImage(1)", fadeGallery.options["animationSpeed"] +
                                                      fadeGallery.options["autoChangeSpeed"]);
    } else {
      $("#fadeGallery a.prev").click(function() {
        fadeGallery.changeImage(-1);
        return false;
      });
      $("#fadeGallery a.next").click(function() {
        fadeGallery.changeImage(1);
        return false;
      });
    }
  },
  
  current: function() {
    return fadeGallery.array[fadeGallery.arrayPosition];
  },
  
  updateTitle: function() {
    var e = $("#fadeGallery .title");
    if (e.length > 0) {
      e.html(fadeGallery.current().attr("title"));
    }
  },
  
  changeImage: function(change) {
    fadeGallery.current().fadeOut(fadeGallery.options["animationSpeed"]);

    fadeGallery.arrayPosition = ((fadeGallery.arrayPosition + change) + fadeGallery.array.length) %
                                  fadeGallery.array.length;
    
    fadeGallery.current().fadeIn(
      fadeGallery.options["animationSpeed"], function() { fadeGallery.updateTitle(); }
    );

    if (fadeGallery.automated && fadeGallery.active) {
      window.setTimeout("fadeGallery.changeImage(1)", fadeGallery.options["animationSpeed"] +
                                                      fadeGallery.options["autoChangeSpeed"]);
    }
  }
}

$(document).ready(function() {
  fadeGallery.init();
});
