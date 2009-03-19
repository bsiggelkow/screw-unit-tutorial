Screw.Unit( function() {
  before(function() {
    $('#dom_test').append("<div id='bring'>bring</div>");
    $('#dom_test').append("<div id='shrub'>shrub</div>");
  });
  describe("index", function() {
    it("#shrub should be initially hidden", function() {
      expect($('#shrub')).to( be_hidden );
    });
    it("should toggle #shrub when #bring is clicked", function() {
      $('#bring').click();
      expect($('#shrub')).to_not( be_hidden );
      $('#bring').click();
      expect($('#shrub')).to( be_hidden );
    });
  });
});