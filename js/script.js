const bikes = [
    { bike: 'fzx', model: 'version-3', mileage: '52km/pl', rate: '1,00,000', qty: 0 },
    { bike: 'duke', model: 'duke-200', mileage: '35km/pl', rate: '1,50,000', qty: 0 },
    { bike: 'R15', model: 'version:3.0', mileage: '40km/pl', rate: '1,90,000', qty: 0 },
    { bike: 'pulsor', model: 'version-4', mileage: '45km/pl', rate: '1,20,000', qty: 0 },
];

let input1 = [];

function userinputs() {
    let input = prompt("enter the value");
    let result = bikes.find(function (item) {
        return item.bike === input;

    })
    input1.push(result);
    console.log(input1);
}


function userdel() {
    let a = (prompt("delete your protect"))
    input1.splice(0)
    console.log(input1)
}


function inc() {
    let input2 = prompt("enter the value");
    let result2=input2

}


function dec() {
    var a = parseInt(prompt("decrement"))

}




