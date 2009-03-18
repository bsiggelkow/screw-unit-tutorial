Screw.Unit( function() {
  describe("index", function() {
    // before(function() {
    //   $(document).ready(function() {
    //     $('#dom_test').append("<div id='bring'>bring</div>");
    //     $('#dom_test').append("<div id='shrub'>shrub</div>");
    //   });
    // });
    it("#shrub should be initially hidden", function() {
      expect($('#shrub').is(':hidden')).to( be_true );
    });
    it("should toggle #shrub when #bring is clicked", function() {
      $('#bring').click();
      expect($('#shrub').is(':hidden')).to_not( be_true );
      $('#bring').click();
      expect($('#shrub').is(':hidden')).to( be_true );
    });
  });
});