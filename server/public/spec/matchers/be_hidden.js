Screw.Matchers["be_hidden"] = {
  match: function(expected, actual) {
    if (!(actual instanceof jQuery)) {
      throw expected.toString() + " must be an instance of jQuery to match against a selector"
    }
    return actual.is(':hidden');
  },

  failure_message: function(expected, actual, not) {
    return 'expected ' + $.print(actual) + (not ? ' to not be hidden ' : ' to be hidden ');
  }
}
