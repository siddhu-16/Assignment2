import { Fields } from "./data";
let fieldList = new Array();
const dataIndex = new Array();
// Question2
Array.prototype.push.apply(fieldList, Fields.Dimensions);
Array.prototype.push.apply(fieldList, Fields.Details);
Array.prototype.push.apply(fieldList, Fields.Hierarchies);
Array.prototype.push.apply(fieldList, Fields.Measures);

// console.log(fieldList); 

// Question3
const calculatedfields = fieldList.filter(value => {
    if(value.calculatedFieldKey){
        return value.calculatedFieldKey;
    }
})
// console.log(calculatedfields)


// Question4
const pos = fieldList.map(target => target.entityName).indexOf('Discount');
 console.log(pos)

fieldList = fieldList.filter(val=> {
    return val.entityName !== 'Discount';
});
// console.log(fieldList);


// Question5
function que5(){

    fieldList = fieldList.filter(val => {

        if(val.entityName == 'City'){
           
            val.isNumericDataType = true;
            val.dataType = 'numerical';
    
        }
        return val;
    })
    // console.log(fieldList)
}
que5();


// Question7

function que7(){
   
    Fields.Dimensions.forEach((obj, index) => {
        if (obj.Parent == 'Order Date') {
            dataIndex.push(index);
        }
    });

    // console.log(dataIndex);
}
que7();

function que8(){

    Fields.Dimensions.forEach((obj, index) => {
        if (dataIndex.indexOf(index) !== -1) {
            console.log(obj.entityName);
        }
    });

}
que8();


function que9(){
    fieldList.filter(val => {
        if(val.variableType === 'geographical'){
           return val.mappingDetails.unMappedLocationCount = 5
        }
    });
    // console.log(fieldList)
}
que9();

