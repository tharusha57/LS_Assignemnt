// 1.2

const inputSales = [
    { amount: 10000, quantity: 10 },
    { amount: 7000, quantity: 8 },
    { amount: 8000, quantity: 12 }
];


function getSortedArray( inputArray )
{

    const inputSalesWithTotal = [];
    for ( sale of inputArray ){
        inputSalesWithTotal.push( calculateTotal( sale ));
    }

    // Using Bubble sort algorithm to sort the array
    for ( let i = 0; i < inputSalesWithTotal.length - 1; i++ ) {
        for ( let j = 0; j < inputSalesWithTotal.length - 1 - i; j++ ) {
            if ( inputSalesWithTotal[j].Total < inputSalesWithTotal[j + 1].Total ) {
                const temp = inputSalesWithTotal[j];
                inputSalesWithTotal[j] = inputSalesWithTotal[j + 1];
                inputSalesWithTotal[j + 1] = temp;
            }
        }
    }

    console.log( inputSalesWithTotal );

}

// Calculate total and add it to the objects
const calculateTotal = ( saleObject ) => 
{
    const total = saleObject.amount * saleObject.quantity;
    return { ...saleObject , Total: total };
};


getSortedArray(inputSales);