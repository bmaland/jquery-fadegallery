/* jQuery Fade Gallery
 * Copyright 2008 Bjørn Arild Mæland (bjorn.maeland at gmail.com)
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 */

fadeGallery = {
  options: {
		"animationSpeed": 1200
	},
	
  init: function() {
    fadeGallery.array = [];
    // Add images to our array and set css properties
    $("#fadeGallery img").each(function (i) {
      fadeGallery.array.push($(this));
      $(this).css({display: "none", position: "absolute", top: 0, zIndex: 0});
    });
    
    // Show first img
    fadeGallery.array[0].show();
    fadeGallery.arrayPosition = 0;
    fadeGallery.updateTitle();
    
    // Click handlers
    $("#fadeGallery-nav a.prev").click(function() {
      fadeGallery.changeImage(-1);
      return false;
    });
    $("#fadeGallery-nav a.next").click(function() {
      fadeGallery.changeImage(1);
      return false;
    });
  },
  
  current: function() {
    return fadeGallery.array[fadeGallery.arrayPosition];
  },
  
  updateTitle: function() {
    $("#fadeGallery-nav p.title").html(fadeGallery.current().attr("title"));
  },
  
  changeImage: function(change) {
    fadeGallery.current().fadeOut(fadeGallery.options["animationSpeed"], function() { $(this).hide(); });
    fadeGallery.current().removeClass("visible");
    
    fadeGallery.arrayPosition = ((fadeGallery.arrayPosition + change) + fadeGallery.array.length) % fadeGallery.array.length;
    
    fadeGallery.current().fadeIn(
      fadeGallery.options["animationSpeed"], function() { fadeGallery.updateTitle(); }
    );
  }
}

$(document).ready(function() {
  fadeGallery.init();
});
