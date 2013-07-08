( function( fweetLoader, $, undefined ) {
  "use strict";

  // Used in this function to reference itself.
  var self = fweetLoader;

  // Arrays to hold fweet and alert objects to be used by Handlebars templates.
  // Publically available.
  self.fweets = [];
  self.alerts = [];

  // Variable used internally to keep track of all fweets that have already
  // been loaded. Used to ignore fweets that are loaded a second time.
  var presentFweetIds = [];

  // Public functions
  // Only publically available function.
  // Start the application and load some initial content.
  self.init = function() {

    // jQuery click handlers.
    $( '#fweet_loader' ).on( 'click', get );
    $( '#fweet_sort_by_sentiment' ).on( 'click', function(  ) {
      self.fweets.sort( dynamicSort( "sentiment" ) );
      self.Fweet.render();
    });
    $( '#fweet_sort_by_created_at' ).on( 'click', function( ) {
      self.fweets.sort( dynamicSort( "createdAt" ) );
      self.Fweet.render();
    });

    // On load, run get() once.
    get();
  };

  // Private functions
  // API loading function.
  var get = function() {

    // The API being used to load the fweets.
    var fweetAPI = "http://adaptive-test-api.herokuapp.com/tweets.json";

    // AJAX request from API.
    $.getJSON( fweetAPI )

    // Handle success.
    .done( function( data ) {
      success( data );
    })

    // Handle failure.
    .fail( function( error ) {
      fail( error );
    });
  };

  // On get() success.
  var success = function( data ) {

    // Variable to keep track of the fweets that have just been created.
    // To compare against get() response, and check that it is
    var ignoredFweets = [];

    // For each object in the response of get().
    $.each( data, function( index, fweet ) {

      // If this object fweet has not been previously loaded...
      if ( $.inArray( fweet.id, presentFweetIds ) === -1 ) {

        // Create a new Fweet object.
        var newFweet = Object.create( self.Fweet );

        // And initialize it with the current fweet.
        newFweet.init( fweet );

        // Refresh the fweets on the page.
        newFweet.render();

        // And then track it.
        presentFweetIds.push( fweet.id );
      } else {
        // If this object has been previously loaded, add it to ignoredFweets.
        ignoredFweets.push( fweet.id );
      }
    });

    // If all newly loaded fweets were ignored...
    if ( ignoredFweets.length === data.length ) {

      // Create a new Alert object.
      var newAlert = Object.create( self.Alert );

      // And initializa it as type 'extant'.
      newAlert.init( 'extant' );
      newAlert.render();
      newAlert.remove();
    }

    // At the end, reset ignoredFweets.
    ignoredFweets.length = 0;
  };

  // On get() fail.
  var fail = function( error ) {

    // If the error returned is of status 500.
    if ( error.status === 500 ) {

      // Create a new Alert object.
      var newAlert = Object.create( self.Alert );

      // And initialize it as type 'fail'.
      newAlert.init( 'fail' );
      newAlert.render();
      newAlert.remove();

    // If the error is anything else... // eg. status === 418
    } else {

      // Create a new Alert object.
      var newAlert = Object.create( self.Alert );

      // And initialize it as the default type.
      newAlert.init();
      newAlert.render();
      newAlert.remove();
    }
  };
}( window.fweetLoader = window.fweetLoader || {}, jQuery ));
