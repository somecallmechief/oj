// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    module('x-flotchart', {
      setup: function() {
        OJ['GENERATE_UNIQUE_IDS'] = true;
        return OJ.nodes.div();
      }
    });
    test('Test the flotchart component', function() {
      var dNode, flotchart, nodeId;
      expect(4);
      flotchart = OJ.body.flotchart();
      deepEqual(flotchart.componentName === 'x-flotchart', true, 'Component is an flotchart');
      nodeId = flotchart.getId();
      dNode = document.getElementById(nodeId);
      ok(dNode, 'Node is in the DOM');
      deepEqual(nodeId, dNode.id, 'Element IDs are equal');
      flotchart.remove();
      equal(undefined, document.getElementById(nodeId, 'flotchart has been removed'));
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=test.flotchart.map