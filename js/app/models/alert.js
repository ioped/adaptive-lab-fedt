( function( fweetLoader, $, moment, undefined ) {
  "use strict";

  // Used in this function to reference itself.
  var self = fweetLoader;

  // Convenience variable used by Handlebars templates in Alert#render().
  var alertContainer = $( '#alerts' );

  // Define the Alert object.
  self.Alert = {

    // Initialize the alert.
    init: function( type ) {
      this.set( type );
      this.persist();
      this.render();
      this.remove();
    },

    // Used to set the alert properties.
    set: function( type ) {
      if ( type === 'extant' ) {
        this.message = "Sorry, no new fweets were retrieved.";
      } else if ( type === 'fail' ) {
        this.message = "Sorry, there was an error. (500 Error)";
      } else {
        this.message = "Sorry, something went wrong.";
      }
      this.newnessExpiresAt = moment().add( 500, 'milliseconds' );
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

    // Save the alert in the alerts array.
    persist: function() {
      var that = this;
      fweetLoader.alerts.push( that );
    },

    // Setup click handler, and remove alert from alerts array.
    remove: function() {
      var alert = $( '.close' ).parent();

      // Click handler for animated 'removal' from page.
      $( '.close' ).on( 'click', function() {
        $( this ).parent().slideUp();
      });

      // Otherwise animate out of page after 10 seconds.
      setTimeout( function() {
        alert.slideUp();
      }, 10000 );

      // Remove alert from alerts array.
      fweetLoader.alerts.splice( this.index , 1 );
    },

    // Used to refresh the fweetContainer with data from the current alerts array.
    render: function() {
      var source = $( "#alertTemplate" ).html();
      var template = Handlebars.compile( source );
      var data = { alerts: fweetLoader.alerts };
      alertContainer.html( template( data ) );
      removeHighlight();
    }
  };
}( window.fweetLoader = window.fweetLoader || {}, jQuery, moment ));
