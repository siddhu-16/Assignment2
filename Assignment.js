"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var fieldList;
var dataIndex = [];
fieldList = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], data_1.Fields.Details, true), data_1.Fields.Dimensions, true), data_1.Fields.Hierarchies, true), data_1.Fields.Measures, true);
// console.log(fieldList.length); 
var calculatedfields = fieldList.filter(function (value) {
    if (value.calculatedFieldKey != undefined) {
        return value.calculatedFieldKey;
    }
});
// console.log(calculatedfields)
var pos = fieldList.findIndex(function (target) { return target.entityName === 'Discount'; });
// console.log(pos)
// fieldList = fieldList.filter(val=> {
//     return val.entityName !== 'Discount';
// });
fieldList.splice(pos, 1);
console.log(fieldList.length);
function question5() {
    fieldList.forEach(function (val) {
        if (val.entityName == 'City') {
            val.isNumericDataType = true;
            val.dataType = 'numerical';
        }
    });
    // console.log(fieldList)
}
question5();
function question6() {
    var array = new Array();
    for (var index = 0; index < calculatedfields.length; index++) {
        array.push.apply(array, calculatedfields[index].variables);
    }
    var finalArray = new Array();
    array.map(function (x) {
        if (x.variableType == 'numerical') {
            finalArray.push(x);
        }
    });
    //  console.log(finalArray)
}
question6();
function question7() {
    data_1.Fields.Dimensions.forEach(function (obj, index) {
        if (obj.Parent == 'Order Date') {
            dataIndex.push(index);
            // console.log(typeof(index))
        }
    });
    // console.log(dataIndex);
}
question7();
function question8() {
    data_1.Fields.Dimensions.forEach(function (obj, index) {
        if (dataIndex.indexOf(index) !== -1) {
            // console.log(obj.entityName);
        }
    });
}
question8();
function question9() {
    data_1.Fields.Measures.forEach(function (x) {
        var key = 'datasetKey';
        var val = x.datasetId;
        x[key] = val;
    });
    // console.log(Fields.Measures)
}
question9();
function question10() {
    fieldList.forEach(function (val) {
        if (val.variableType === 'geographical') {
            return val.mappingDetails.unMappedLocationCount = 5;
        }
    });
    // console.log(fieldList)
}
question10();
function question11() {
    var NumericalItems = new Array();
    fieldList.forEach(function (x) {
        if (x.isNumericDataType == true && x.dataType == 'float') {
            var val = x.subDatasetId;
            x.subDatasetId = x.datasetId;
            NumericalItems.push(val);
        }
    });
    console.log(NumericalItems);
}
question11();
