"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fields = void 0;
// Q1
var Fields = {
    "Hierarchies": [],
    "Dimensions": [
        {
            "isNumericDataType": false,
            "entityName": "Order ID",
            "variableType": "categorical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": false,
            "entityName": "Order Date",
            "variableType": "interval",
            "dataType": "date",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "entityName": "Order Date_Year",
            "Parent": "Order Date",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "variableType": "categorical",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16",
            "dataType": "int64",
            "subcol": true
        },
        {
            "entityName": "Order Date_Quarter",
            "Parent": "Order Date",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "variableType": "categorical",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16",
            "dataType": "int64",
            "subcol": true
        },
        {
            "entityName": "Order Date_Month",
            "Parent": "Order Date",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "variableType": "categorical",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16",
            "dataType": "int64",
            "subcol": true
        },
        {
            "entityName": "Order Date_Day",
            "Parent": "Order Date",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "variableType": "categorical",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16",
            "dataType": "int64",
            "subcol": true
        },
        {
            "entityName": "Order Date_Weekday",
            "Parent": "Order Date",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "variableType": "categorical",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16",
            "dataType": "str",
            "subcol": true
        },
        {
            "entityName": "Order Date_Week number",
            "Parent": "Order Date",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "variableType": "categorical",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16",
            "dataType": "int64",
            "subcol": true
        },
        {
            "isNumericDataType": false,
            "entityName": "Country",
            "variableType": "categorical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": false,
            "entityName": "City",
            "variableType": "categorical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": false,
            "entityName": "State",
            "variableType": "geographical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16",
            "mappingDetails": {
                "unMappedLocationCount": 0,
                "message": ""
            }
        },
        {
            "isNumericDataType": false,
            "entityName": "Region",
            "variableType": "categorical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": false,
            "entityName": "Product ID",
            "variableType": "categorical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "calculatedFieldKey": "2d2ea994-f27d-43a9-b3ee-d0c7baf5dcae",
            "variables": [
                {
                    "entityName": "Customer Name",
                    "variableType": "categorical",
                    "dataType": "text"
                }
            ],
            "isCalCache": false,
            "isCalculatedField": "True",
            "parameters": [],
            "parameterNameList": [],
            "isValid": "True",
            "isNumericDataType": false,
            "entityName": "Cal32",
            "variableType": "categorical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        }
    ],
    "Measures": [
        {
            "isNumericDataType": true,
            "entityName": "Row ID",
            "variableType": "numerical",
            "dataType": "integer",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": true,
            "entityName": "Postal Code",
            "variableType": "numerical",
            "dataType": "float",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": true,
            "entityName": "Sales",
            "variableType": "numerical",
            "dataType": "float",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": true,
            "entityName": "Quantity",
            "variableType": "numerical",
            "dataType": "integer",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": true,
            "entityName": "Discount",
            "variableType": "numerical",
            "dataType": "float",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": true,
            "entityName": "Profit",
            "variableType": "numerical",
            "dataType": "float",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": true,
            "entityName": "Blank Column",
            "variableType": "numerical",
            "dataType": "float",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "calculatedFieldKey": "aab7d6bc-2947-42b7-9923-c6fec9471978",
            "variables": [
                {
                    "entityName": "Cal1",
                    "variableType": "numerical",
                    "dataType": "float",
                    "calculatedFieldKey": "9ebc4055-8b67-42f3-a6eb-2a49acddb80f",
                    "parameters": [],
                    "parameterNameList": []
                },
                {
                    "entityName": "Sales",
                    "variableType": "numerical",
                    "dataType": "float"
                }
            ],
            "isCalCache": false,
            "isCalculatedField": "True",
            "parameters": [],
            "parameterNameList": [],
            "isValid": "True",
            "isNumericDataType": true,
            "entityName": "Cal2",
            "variableType": "numerical",
            "dataType": "float",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "calculatedFieldKey": "9ebc4055-8b67-42f3-a6eb-2a49acddb80f",
            "variables": [
                {
                    "entityName": "Profit",
                    "variableType": "numerical",
                    "dataType": "float"
                },
                {
                    "entityName": "Sales",
                    "variableType": "numerical",
                    "dataType": "float"
                }
            ],
            "isCalCache": false,
            "isCalculatedField": "True",
            "parameters": [],
            "parameterNameList": [],
            "isValid": "True",
            "isNumericDataType": true,
            "entityName": "Cal1",
            "variableType": "numerical",
            "dataType": "float",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        }
    ],
    "Details": [{
            "isNumericDataType": false,
            "entityName": "Category",
            "variableType": "categorical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": false,
            "entityName": "Sub_Category",
            "variableType": "categorical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        },
        {
            "isNumericDataType": false,
            "entityName": "Product Name",
            "variableType": "categorical",
            "dataType": "text",
            "datasetId": "0d455a70-942d-498b-80fe-68604d4b41b1",
            "subDatasetId": "95896f9e-c422-435d-bf1f-ad85e1aefd16"
        }
    ]
};
exports.Fields = Fields;
