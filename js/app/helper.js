( function( fweetLoader, $, undefined ) {
  "use strict";

  // Used to remove the 'new' class every time Fweet#render() or Alert#render() are called.
  self.removeHighlight = function() {
    $( '.new' ).delay( 50 ).queue( function() {
    $( this ).removeClass( "new" );
    $( this ).dequeue();
    });
  };

  // Sorting function used by jQuery click handlers in fweetLoader#init. Taken from
  // http://stackoverflow.com/questions/1129216/sorting-objects-in-an-array-by-a-field-value-in-javascript
  // Response by Ege Özcan
  self.dynamicSort = function( property ) {
    var sortOrder = 1;
    if( property[0] === "-" ) {
      sortOrder = -1;
      property = property.substr( 1, property.length - 1 );
    }
    return function ( a, b ) {
      var result = ( a[property] < b[property] ) ? -1 : ( a[property] > b[property] ) ? 1 : 0;
      return result * sortOrder;
    };
  };
}( window.fweetLoader = window.fweetLoader || {}, jQuery ));
