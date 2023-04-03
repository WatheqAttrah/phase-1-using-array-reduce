const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


const totalBatteries=batteryBatches.reduce(reducer)

function reducer(totalBatteries,value){
    return totalBatteries + value;
}
reducer(totalBatteries);
