/*global OJ:true, QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/

(function _NodeTests() {

    //#region OJ.to.number

    module("OJnode");

    test("OJ.node.make('OjTestingDiv')", function() {
        expect(3);
        var node = OJ.node.make('OjTestingDiv');
        deepEqual(node.tagName === 'DIV', true, "OJ Node is a DIV");
        deepEqual(node instanceof OJ.metadata.Node, true, "OJ Node is an instance of an OJ Node");
        deepEqual(node.id === 'OjTestingDiv', true, "OJ node has an element ID.");
    });

    test("OJ test child node", function() {
        expect(3);
        var node = OJ.node.make('OjTestingDiv');
        var childDiv = node.div({
            value: 'test'
        });
        deepEqual(document.getElementById('OjTestingDiv').childNodes[0].getAttribute('value') === 'test', true, "OJ chaning single node works from document. ");
        deepEqual(childDiv[0].getAttribute('value') === 'test', true, "OJ chaning single node works from OJ.");
        deepEqual(childDiv.value === 'test', true, "OJ chaning single node works from OJ.");
    });

}());