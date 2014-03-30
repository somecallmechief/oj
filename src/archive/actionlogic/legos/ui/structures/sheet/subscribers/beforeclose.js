// Generated by CoffeeScript 1.7.1
(function() {
  var _beforecloseIIFE;

  (_beforecloseIIFE = function(OJ) {

    /*
    Create a new before close subscriber;
     */
    var subscribers;
    OJ.sheets.subscribers.register("beforeclose", subscribers = function(callBack) {
      "use strict";
      var beforeclose;
      if (callBack) {

        /*
        BeforeClose event on the window.Window
        @param extView {Ext.Component} usually the Ext Window
        @param eOpts {Object} arbitrary Ext props
         */
        return beforeclose = function(extView, eOpts) {
          "use strict";
          var args;
          args = arguments_;
          return OJ.fun.apply(callBack, args, this);
        };
      }
    });
  })((typeof global !== "undefined" && global ? global : (typeof window !== "undefined" ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=beforeclose.map