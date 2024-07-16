"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var fieldList = new Array();
var dataIndex = new Array();
// Question2
Array.prototype.push.apply(fieldList, data_1.Fields.Dimensions);
Array.prototype.push.apply(fieldList, data_1.Fields.Details);
Array.prototype.push.apply(fieldList, data_1.Fields.Hierarchies);
Array.prototype.push.apply(fieldList, data_1.Fields.Measures);
// console.log(fieldList); 
// Question3
var calculatedfields = fieldList.filter(function (value) {
    if (value.calculatedFieldKey) {
        return value.calculatedFieldKey;
    }
});
// console.log(calculatedfields)
// Question4
var pos = fieldList.map(function (target) { return target.entityName; }).indexOf('Discount');
console.log(pos);
fieldList = fieldList.filter(function (val) {
    return val.entityName !== 'Discount';
});
// console.log(fieldList);
// Question5
function que5() {
    fieldList = fieldList.filter(function (val) {
        if (val.entityName == 'City') {
            val.isNumericDataType = true;
            val.dataType = 'numerical';
        }
        return val;
    });
    // console.log(fieldList)
}
que5();
// Question7
function que7() {
    data_1.Fields.Dimensions.forEach(function (obj, index) {
        if (obj.Parent == 'Order Date') {
            dataIndex.push(index);
        }
    });
    // console.log(dataIndex);
}
que7();
function que8() {
    data_1.Fields.Dimensions.forEach(function (obj, index) {
        if (dataIndex.indexOf(index) !== -1) {
            console.log(obj.entityName);
        }
    });
}
que8();
function que9() {
    fieldList.filter(function (val) {
        if (val.variableType === 'geographical') {
            return val.mappingDetails.unMappedLocationCount = 5;
        }
    });
    // console.log(fieldList)
}
que9();
data_1.Fields.Measures.map(function (item) { return (__assign(__assign({}, item), { datasetKey: item.datasetId })); });
console.log(fieldList);
