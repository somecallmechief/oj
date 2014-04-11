// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    var className, nodeName;
    nodeName = 'x-grid';
    className = 'grid';
    OJ.components.members[nodeName] = className;
    OJ.components.register(className, function(options, owner) {
      var defaults, fillMissing, ret, rows, tiles;
      defaults = {
        props: {
          "class": 'grid'
        }
      };
      OJ.extend(defaults, options);
      ret = OJ.component(defaults, owner, nodeName);
      rows = [];
      tiles = OJ.array2D();
      fillMissing = function() {
        return tiles.each(function(rowNo, colNo, val) {
          var nuTile, row;
          if (!val) {
            row = ret.row(rowNo);
            nuTile = OJ.components.tile({}, row);
            return tiles.set(rowNo, colNo, nuTile);
          }
        });
      };
      ret.add('row', function(rowNo) {
        var nuRow;
        if (rowNo == null) {
          rowNo = rows.length - 1 || 1;
        }
        nuRow = rows[rowNo - 1];
        if (!nuRow) {
          while (rows.length < rowNo) {
            nuRow = ret.div({
              props: {
                "class": 'row'
              }
            });
            rows.push(nuRow);
          }
          nuRow.add('tile', function(colNo, opts) {
            return ret.tile(rowNo, colNo, opts);
          });
        }
        return nuRow;
      });
      ret.add('tile', function(rowNo, colNo, opts) {
        var row, tile;
        if (!rowNo || rowNo < 1) {
          rowNo = 1;
        }
        if (!colNo || colNo < 1) {
          colNo = 1;
        }
        row = rows[rowNo - 1];
        if (!row) {
          ret.row(rowNo);
        }
        tile = tiles.get(rowNo - 1, colNo - 1);
        if (!tile) {
          fillMissing();
        }
        tile = tiles.get(rowNo - 1, colNo - 1);
        return tile;
      });
      return ret;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=grid.map