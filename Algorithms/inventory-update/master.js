function updateInventory(arr1, arr2) {
    for(let i=0;i<arr2.length;i++){
        //Agrego si no esta
         if(!arr1.some(value=> value[1] == arr2[i][1])){
             arr1.push(arr2[i])
         }//si ya esta, sumo
         else if(arr1.some(value=> value[1] == arr2[i][1])){
             for(let j=0;j<arr1.length;j++){
                 if(arr1[j][1] == arr2[i][1]){
                     arr1[j][0]+=arr2[i][0]
                 }
             }
         }
         //ordenar alfabeticamente
         arr1.sort(function (a, b) {
            if (a[1] > b[1]) {
            return 1;
            }
            if (a[1] < b[1]) {
            return -1;
            }
            return 0;
        })
    }

    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]));