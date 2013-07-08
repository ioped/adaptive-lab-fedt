"use strict";

// Handlebars function to calculate the time from now
// and make 'createdAt' more human readable.
Handlebars.registerHelper( 'timeAgo', function() {
  return moment( this.createdAt ).fromNow();
});

// Initialize the application.
fweetLoader.init();
