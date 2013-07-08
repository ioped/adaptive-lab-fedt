describe('Alerts', function() {
  var mockAlert;

  describe('when alert is created', function() {
    mockAlert = Object.create( fweetLoader.Alert );
    mockAlert.init();

    it('should be in alerts array', function() {
      expect(fweetLoader.alerts).toContain(mockAlert);
    });
  });
});
