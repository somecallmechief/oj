// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    var fields;
    fields = function(select) {
      var ret;
      ret = new OJ.actions.querybuilder.SqlFineTuningStore({
        storeId: "SqlFineTuningStore"
      });
      ret.handleSQLFieldChanges = function(fieldStore, model, operation) {
        if (operation === "commit") {
          select.updateSQLOutput();
        }
      };
      ret.handleSQLFieldRemove = function(fieldStore) {
        select.updateSQLOutput();
      };
      ret.on("update", ret.handleSQLFieldChanges, select);
      ret.on("remove", ret.handleSQLFieldRemove, select);
      ret.updateFieldTableData = function(table) {
        var expression, tableAlias, tableId, tableName;
        tableId = void 0;
        expression = void 0;
        tableAlias = void 0;
        tableName = void 0;
        tableId = table.get("id");
        tableAlias = table.get("tableAlias");
        tableName = table.get("tableName");
        ret.each(function(field) {
          if (field.get("tableId") === tableId) {
            if (tableAlias !== "") {
              expression = tableAlias + "." + field.get("field");
            } else {
              expression = tableName + "." + field.get("field");
            }
            field.beginEdit();
            field.set("tableAlias", tableAlias);
            field.set("expression", expression);
            field.commit(true);
            field.endEdit();
          }
        });
        return ret;
      };
      ret.removeFieldById = function(id) {
        var field;
        field = void 0;
        field = ret.getById(id);
        ret.remove(field);
        return ret;
      };
      ret.removeFieldsByTableId = function(tableId) {
        var aRecords;
        aRecords = [];
        ret.each(function(model) {
          if (model.get("tableId") === tableId) {
            aRecords.push(model);
          }
        });
        ret.remove(aRecords);
        return ret;
      };
      ret.addFieldRecord = function(record, bOutput) {
        var expression, model, tableAlias;
        tableAlias = void 0;
        model = void 0;
        expression = void 0;
        tableAlias = select.tables.getTableById(record.get("tableId")).get("tableAlias");
        if (tableAlias !== "") {
          expression = tableAlias + "." + record.get("field");
        } else {
          expression = record.get("tableName") + "." + record.get("field");
        }
        model = ret.getNewField();
        model.set("expression", expression);
        model.set("output", bOutput);
        model.set("id", record.get("id"));
        model.set("field", record.get("field"));
        model.set("tableId", record.get("tableId"));
        model.set("extCmpId", record.get("extCmpId"));
        ret.addField(model);
        return ret;
      };
      ret.addField = function(field) {
        ret.add(field);
        return ret;
      };
      ret.getNewField = function() {
        return new OJ.actions.querybuilder.SqlFineTuningModel();
      };
      return ret;
    };
    OJ.actions.sql.register("fields", fields);
  })((typeof global !== "undefined" && global ? global : (typeof window !== "undefined" ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=fields.map