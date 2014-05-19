// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    'use strict';
    var nodeName;
    nodeName = 'table';
    OJ.nodes.register(nodeName, function(options, owner, calledFromFactory) {
      var cells, columnCount, defaults, fillMissing, ret, rows, tbody, thead, theadRow;
      if (owner == null) {
        owner = OJ.body;
      }
      if (calledFromFactory == null) {
        calledFromFactory = false;
      }
      defaults = {
        props: {
          cellpadding: 0,
          cellspacing: 0,
          align: '',
          width: '',
          cellalign: 'left',
          cellvalign: 'top',
          "class": ''
        },
        styles: {},
        events: {
          click: _.noop
        },
        cells: {
          "class": '',
          align: '',
          'vertical-align': '',
          cellpadding: '',
          margin: ''
        },
        firstAlignRight: false,
        oddAlignRight: false
      };
      rows = [];
      cells = OJ.array2D();
      columnCount = 0;
      OJ.extend(defaults, options, true);
      ret = OJ.element(nodeName, defaults.props, defaults.styles, defaults.events, defaults.text);
      if (false === calledFromFactory) {
        OJ.nodes.factory(ret, owner);
      }
      tbody = null;
      thead = null;
      theadRow = null;
      ret.add('init', _.once(function() {
        thead = ret.thead();
        theadRow = thead.tr();
        tbody = ret.tbody();
        rows.push(tbody.tr());
        return ret;
      }));
      fillMissing = function() {
        return cells.each(function(rowNo, colNo, val) {
          var row;
          if (!val) {
            row = ret.row(rowNo);
            return row.cell(colNo, {});
          }
        });
      };

      /*
      Adds a column name to the table head
       */
      ret.add('column', function(colNo, colName) {
        var i, nativeTh, th;
        ret.init();
        columnCount += 1;
        th = null;
        i = 0;
        while (thead[0].rows[0].cells.length < colNo) {
          nativeTh = thead[0].rows[0].cells[i];
          if (!nativeTh) {
            th = theadRow.th({});
          } else {
            th = OJ.restoreElement('th', nativeTh);
          }
          i += 1;
        }
        if (!th) {
          nativeTh = thead[0].rows[0].cells[colNo - 1];
          th = OJ.restoreElement('th', nativeTh);
        }
        th.text(colName);
        return th;
      });

      /*
      Adds a new row (tr) to the table body
       */
      ret.add('row', function(rowNo, opts) {
        var row;
        ret.init();
        row = rows[rowNo - 1];
        if (!row) {
          while (rows.length < rowNo) {
            row = tbody.tr({});
            rows.push(row);
          }
        }
        if (!row.cell) {
          row.add('cell', function(colNo, opts) {
            var cell;
            cell = OJ.nodes.td(opts, row);
            cells.set(rowNo, colNo, cell);
            return cell;
          });
        }
        return row;
      });

      /*
      Adds a cell (tr/td) to the table body
       */
      ret.add('cell', function(rowNo, colNo, opts) {
        var cell, i, nuOpts, row, tryCell;
        ret.init();
        if (rowNo < 1) {
          rowNo = 1;
        }
        if (colNo < 1) {
          colNo = 1;
        }
        if (columnCount > 0 && colNo - 1 > columnCount) {
          throw new Error('A column name has not been defined for this position {' + rowNo + 'x' + colNo + '}.');
        }
        row = ret.row(rowNo);
        cell = cells.get(rowNo, colNo);
        if (!cell) {
          i = 0;
          while (i < colNo) {
            i += 1;
            tryCell = cells.get(rowNo, i);
            if (!tryCell) {
              if (i === colNo) {
                nuOpts = OJ.extend({
                  props: defaults.cells
                }, opts);
                cell = row.cell(colNo, nuOpts);
              } else {
                row.cell(i, {
                  props: defaults.cells
                });
              }
            }
          }
        }
        return cell;
      });
      return ret;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=table.map