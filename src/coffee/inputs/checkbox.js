﻿// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    var inputName;
    inputName = 'checkbox';
    OJ.inputs.register(inputName, function(options, owner) {
      var defaults, ret;
      if (owner == null) {
        owner = OJ.body;
      }
      defaults = {
        checked: false,
        indeterminate: false,
        props: {
          type: inputName
        },
        styles: {},
        events: {
          click: OJ.noop
        }
      };
      OJ.extend(defaults, options, true);
      ret = OJ.input(defaults, owner);
      if (defaults.checked) {
        ret.attr('checked', true);
      } else if (defaults.indeterminate) {
        ret.attr('indeterminate', true);
      }
      return ret;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=checkbox.js.map