import { Fields } from "./data";
let fieldList ;
let dataIndex: any[] = [] ;


fieldList = [...Fields.Details,...Fields.Dimensions,...Fields.Hierarchies,...Fields.Measures]

// console.log(fieldList.length); 


const calculatedfields = fieldList.filter(value => {
    
    if(value.calculatedFieldKey != undefined){
        return value.calculatedFieldKey
    }
    
})
// console.log(calculatedfields)



    const pos = fieldList.findIndex(
        target => target.entityName === 'Discount'
    )
    // console.log(pos)


// fieldList = fieldList.filter(val=> {
//     return val.entityName !== 'Discount';
// });

fieldList.splice(pos,1)

// console.log(fieldList);


function question5(){

   fieldList.forEach(val => {

        if(val.entityName == 'City'){
           
            val.isNumericDataType = true;
            val.dataType = 'numerical';
    
        }
        
    })
    // console.log(fieldList)
}
question5();



function question6(){
    let array = new Array();
    for (let index = 0; index < calculatedfields.length; index++) {
        
        array.push(...calculatedfields[index].variables)
    }
    let finalArray = new Array();
    array.map((x)=>{
        if(x.variableType == 'numerical'){
            finalArray.push(x)
    }
    })
//  console.log(finalArray)
}

question6();


function question7(){
   
    Fields.Dimensions.forEach((obj, index) => {
        if (obj.Parent == 'Order Date') {
            dataIndex.push(index);
            // console.log(typeof(index))
        }
    });

    // console.log(dataIndex);
}
question7();

function question8(){

    Fields.Dimensions.forEach((obj, index) => {
        if (dataIndex.indexOf(index) !== -1) {
            // console.log(obj.entityName);
        }
    });

}
question8();

function question9(){
     Fields.Measures.forEach((x)=>{
        let key:string = 'datasetKey';
        let val = x.datasetId;
        x[key] = val
    })
    // console.log(Fields.Measures)
}

question9()


function question10(){
    fieldList.forEach(val => {
        if(val.variableType === 'geographical'){
           return val.mappingDetails.unMappedLocationCount = 5
        }
    });
    // console.log(fieldList)
}
question10();

function question11(){
    let NumericalItems = new Array();
    fieldList.forEach((x)=>{
        if(x.isNumericDataType == true && x.dataType == 'float'){
            let val = x.subDatasetId ;
            x.subDatasetId = x.datasetId;
            NumericalItems.push(val)
        }
    })

    // console.log(NumericalItems);
    
}

question11();