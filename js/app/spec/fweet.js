describe( 'Fweets', function() {
  var fakeFweet = {
    created_at: "2013-06-30T19:20:00Z",
    followers: 7,
    id: 42,
    message: "Cupcake ipsum dolor sit amet lollipop muffin cake pudding.",
    sentiment: 1.0,
    updated_at: "2013-06-30T19:20:00Z",
    user_handle: "@cupcake_luvr"
  };

  describe( 'when fweet is created', function() {
    mockFweet = Object.create( fweetLoader.Fweet );
    mockFweet.init( fakeFweet );

    it( 'should be in fweets array', function() {
      expect( fweetLoader.fweets ).toContain( mockFweet );
    });
  });
});
