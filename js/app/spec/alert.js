describe( 'Alerts', function() {
  var mockAlert;

  describe( 'when alert is created', function() {
  mockAlert = Object.create( fweetLoader.Alert );
  mockAlert.init();

    it( 'should be in alerts array', function() {
      expect( fweetLoader.alerts ).toContain( mockAlert );
    });
  });

  describe( 'when alert is removed', function() {
    it( 'should not be in alerts array', function() {
      mockAlert.remove();
      expect( fweetLoader.alerts ).not.toContain( mockAlert );
    });

    it( 'alerts array should be empty', function() {
      mockAlert.remove();
      expect( fweetLoader.alerts ).toMatch( [] );
    });
  });
});
