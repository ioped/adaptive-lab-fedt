( function( fweetLoader, $, moment, undefined ) {
  "use strict";

  // Used in this function to reference itself.
  var self = fweetLoader;

  // Convenience variable used by Handlebars templates in Fweet#render().
  var fweetContainer = $( '#fweets' );

  // Define the Fweet object.
  self.Fweet = {

    // Initialize the fweet.
    init: function( fweet ) {
      this.set( fweet );
      this.persist();
      this.render();
    },

    // Used to set the fweet properties.
    set: function( fweet ) {
      this.createdAt = fweet.created_at;
      this.followers = fweet.followers;
      this.id = fweet.id;
      this.message = fweet.message;
      this.sentiment = fweet.sentiment;
      this.updatedAt = fweet.updated_at;
      this.userHandle = fweet.user_handle;
      this.newnessExpiresAt = moment().add( 150, 'milliseconds' );
    },

    // Used by Handlebars templates to check whether to include the 'new' class.
    isNew: function() {
      if ( moment().isAfter( this.newnessExpiresAt ) ) {
        return false;
      }
      else {
        return true;
      }
    },

    // Save the fweet in the fweets array.
    persist: function() {
      var that = this;
      fweetLoader.fweets.unshift( that );
    },

    // Used to refresh the fweetContainer with data from the current fweets array.
    render: function() {
      var source = $( "#fweetTemplate" ).html();
      var template = Handlebars.compile( source );
      var data = { fweets: fweetLoader.fweets };
      fweetContainer.html( template( data ) );
      removeHighlight();
    }
  };
}( window.fweetLoader = window.fweetLoader || {}, jQuery, moment ));
